#!/usr/bin/env node

const crypto = require("crypto");
const fs = require("fs");

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing required env: ${name}`);
    process.exit(1);
  }
  return value;
}

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function signEs256(payload, privateKey, keyId) {
  const header = {
    alg: "ES256",
    kid: keyId,
  };

  const encodedHeader = base64url(JSON.stringify(header));
  const encodedPayload = base64url(JSON.stringify(payload));
  const signingInput = `${encodedHeader}.${encodedPayload}`;

  const signature = crypto.sign("sha256", Buffer.from(signingInput), {
    key: privateKey,
    dsaEncoding: "ieee-p1363",
  });

  return `${signingInput}.${base64url(signature)}`;
}

const teamId = requiredEnv("APPLE_TEAM_ID");
const keyId = requiredEnv("APPLE_KEY_ID");
const clientId = requiredEnv("APPLE_CLIENT_ID");
const privateKeyPath = requiredEnv("APPLE_PRIVATE_KEY_PATH");
const expiresInDays = Number(process.env.APPLE_SECRET_DAYS || 180);

if (!Number.isFinite(expiresInDays) || expiresInDays < 1 || expiresInDays > 180) {
  console.error("APPLE_SECRET_DAYS must be between 1 and 180.");
  process.exit(1);
}

const privateKey = fs.readFileSync(privateKeyPath, "utf8");
const now = Math.floor(Date.now() / 1000);
const payload = {
  iss: teamId,
  iat: now,
  exp: now + expiresInDays * 24 * 60 * 60,
  aud: "https://appleid.apple.com",
  sub: clientId,
};

console.log(signEs256(payload, privateKey, keyId));

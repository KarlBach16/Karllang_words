const fs = require("fs");
const path = require("path");

const levels = ["a1", "a2", "b1", "b2"];
const violations = [];

for (const level of levels) {
  const filePath = path.join(
    __dirname,
    "..",
    "www",
    "data",
    "de",
    `words_de_${level}.js`,
  );
  const source = fs.readFileSync(filePath, "utf8");
  const match = source.match(/=\s*(\[[\s\S]*\]);?\s*$/);

  if (!match) {
    throw new Error(`Unexpected word data format: ${filePath}`);
  }

  const words = JSON.parse(match[1]);
  for (const word of words) {
    if (String(word.pos).toLowerCase() !== "nomen") continue;
    if (/^[A-ZÄÖÜ]/.test(String(word.lemma || ""))) continue;

    violations.push({
      level: level.toUpperCase(),
      id: word.id,
      lemma: word.lemma,
    });
  }
}

if (violations.length > 0) {
  console.error("German noun lemmas must begin with an uppercase letter:");
  violations.forEach(({ level, id, lemma }) => {
    console.error(`- ${level} ${id}: ${lemma}`);
  });
  process.exitCode = 1;
} else {
  console.log("German noun capitalization check passed.");
}

package com.karllang.app;

import android.app.AlertDialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.view.Gravity;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import com.google.android.material.materialswitch.MaterialSwitch;
import org.json.JSONArray;
import org.json.JSONObject;

class NativeSettingsView extends ScrollView {
    interface ActionListener { void onAction(String action, String value); }

    private final LinearLayout content;
    private JSONObject payload = new JSONObject();
    private final ActionListener actionListener;

    NativeSettingsView(Context context, ActionListener actionListener) {
        super(context);
        this.actionListener = actionListener;
        setFillViewport(true);
        setBackgroundColor(Color.rgb(247, 247, 248));
        content = new LinearLayout(context);
        content.setOrientation(LinearLayout.VERTICAL);
        content.setPadding(dp(16), dp(16), dp(16), dp(28));
        addView(content, new ScrollView.LayoutParams(
            LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT
        ));
    }

    void apply(JSONObject nextPayload) {
        payload = nextPayload != null ? nextPayload : new JSONObject();
        rebuild();
    }

    private void rebuild() {
        content.removeAllViews();
        JSONObject language = object("language");
        JSONObject account = object("account");
        JSONObject sync = object("sync");
        JSONObject feedback = object("feedback");

        LinearLayout languageCard = addCard(string(language, "title", "Language"));
        addChoiceRow(languageCard, string(language, "uiLabel", "App language"), language.optJSONObject("ui"), "ui_language", true);
        addChoiceRow(languageCard, string(language, "studyLabel", "Study language"), language.optJSONObject("study"), "study_language", true);

        LinearLayout accountCard = addCard(string(account, "title", "Account"));
        addInfoRow(accountCard, string(account, "status", "Guest mode"), string(account, "detail", ""));
        if (bool(account, "signedIn")) {
            addActionButton(accountCard, string(account, "signOutLabel", "Sign out"), "sign_out", true, false);
        } else {
            addActionButton(accountCard, string(account, "appleLabel", "Sign in with Apple"), "sign_in_apple", false, false);
            addActionButton(accountCard, string(account, "googleLabel", "Sign in with Google"), "sign_in_google", false, false);
        }

        if (bool(sync, "visible")) {
            LinearLayout syncCard = addCard(string(sync, "title", "Sync"));
            String syncDetail = string(sync, "status", "");
            if (syncDetail.isEmpty() && bool(sync, "panelVisible")) syncDetail = string(sync, "detail", "");
            addInfoActionRow(syncCard, string(sync, "checkLabel", "Check sync"), syncDetail, "sync_check", bool(sync, "checking"));
            if (bool(sync, "panelVisible") && bool(sync, "uploadVisible")) {
                addActionButton(syncCard, string(sync, "uploadLabel", "Upload this device"), "sync_upload", false, bool(sync, "uploadDisabled"));
            }
            if (bool(sync, "panelVisible") && bool(sync, "downloadVisible")) {
                addActionButton(syncCard, string(sync, "downloadLabel", "Use cloud data"), "sync_download", false, bool(sync, "downloadDisabled"));
            }
        }

        LinearLayout feedbackCard = addCard(string(feedback, "title", "Feedback"));
        addSwitchRow(feedbackCard, string(feedback, "soundLabel", "Sound"), bool(feedback, "soundEnabled"), "sound");
        addSwitchRow(feedbackCard, string(feedback, "hapticLabel", "Haptics"), bool(feedback, "hapticEnabled"), "haptic");
        addSwitchRow(feedbackCard, string(feedback, "reminderLabel", "Study reminder"), bool(feedback, "reminderEnabled"), "reminder");
        addChoiceRow(feedbackCard, string(feedback, "reminderTimeLabel", "Reminder time"), feedback.optJSONObject("reminderTime"), "reminder_time", bool(feedback, "reminderEnabled"));
        addActionButton(feedbackCard, string(feedback, "feedbackLabel", "Send feedback"), "feedback", false, false);
    }

    private LinearLayout addCard(String title) {
        LinearLayout card = new LinearLayout(getContext());
        card.setOrientation(LinearLayout.VERTICAL);
        card.setPadding(dp(18), dp(16), dp(18), dp(8));
        card.setBackground(roundRect(Color.WHITE, dp(14), Color.rgb(224, 224, 226), 1));

        TextView heading = text(title, 20, Color.rgb(31, 31, 35));
        heading.setTypeface(Typeface.DEFAULT, Typeface.BOLD);
        heading.setPadding(0, 0, 0, dp(5));
        card.addView(heading);

        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
            LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT
        );
        params.bottomMargin = dp(12);
        content.addView(card, params);
        return card;
    }

    private void addInfoRow(LinearLayout parent, String title, String detail) {
        LinearLayout row = baseRow();
        row.addView(labelColumn(title, detail), new LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1));
        parent.addView(row);
    }

    private void addInfoActionRow(LinearLayout parent, String title, String detail, String action, boolean disabled) {
        LinearLayout row = baseRow();
        row.addView(labelColumn(title, detail), new LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1));
        addChevron(row);
        row.setEnabled(!disabled);
        row.setAlpha(disabled ? 0.55f : 1f);
        row.setOnClickListener(v -> emit(action, null));
        parent.addView(row);
    }

    private void addChoiceRow(LinearLayout parent, String title, JSONObject options, String action, boolean enabled) {
        LinearLayout row = baseRow();
        row.addView(text(title, 16, Color.rgb(30, 30, 34)), new LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1));
        TextView value = text(selectedLabel(options), 15, Color.rgb(36, 94, 224));
        row.addView(value, new LinearLayout.LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
        addChevron(row);
        row.setEnabled(enabled);
        row.setAlpha(enabled ? 1f : 0.45f);
        row.setOnClickListener(v -> showChoices(title, options, action));
        parent.addView(row);
    }

    private void addSwitchRow(LinearLayout parent, String title, boolean checked, String action) {
        LinearLayout row = baseRow();
        row.addView(text(title, 16, Color.rgb(30, 30, 34)), new LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1));
        MaterialSwitch toggle = new MaterialSwitch(getContext());
        toggle.setChecked(checked);
        toggle.setOnCheckedChangeListener((buttonView, isChecked) -> emit(action, null));
        row.addView(toggle, new LinearLayout.LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
        parent.addView(row);
    }

    private void addActionButton(LinearLayout parent, String title, String action, boolean destructive, boolean disabled) {
        int background = actionBackground(action, destructive);
        int foreground = background == Color.WHITE ? Color.rgb(36, 94, 224) : Color.WHITE;
        TextView button = text(title, 16, foreground);
        button.setTypeface(Typeface.DEFAULT, Typeface.BOLD);
        button.setGravity(Gravity.CENTER);
        button.setMinimumHeight(dp(48));
        button.setPadding(dp(12), dp(8), dp(12), dp(8));
        button.setBackground(roundRect(background, dp(24), actionBorder(action, destructive), background == Color.WHITE ? 1 : 0));
        button.setEnabled(!disabled);
        button.setAlpha(disabled ? 0.55f : 1f);
        button.setOnClickListener(v -> emit(action, null));
        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT);
        params.topMargin = dp(6);
        params.bottomMargin = dp(8);
        parent.addView(button, params);
    }

    private LinearLayout baseRow() {
        LinearLayout row = new LinearLayout(getContext());
        row.setGravity(Gravity.CENTER_VERTICAL);
        row.setPadding(0, dp(12), 0, dp(12));
        row.setMinimumHeight(dp(52));
        return row;
    }

    private LinearLayout labelColumn(String title, String detail) {
        LinearLayout labels = new LinearLayout(getContext());
        labels.setOrientation(LinearLayout.VERTICAL);
        labels.addView(text(title, 16, Color.rgb(30, 30, 34)));
        if (!detail.isEmpty()) {
            TextView sub = text(detail, 13, Color.rgb(112, 112, 120));
            sub.setPadding(0, dp(3), 0, 0);
            labels.addView(sub);
        }
        return labels;
    }

    private TextView text(String value, int size, int color) {
        TextView view = new TextView(getContext());
        view.setText(value);
        view.setTextSize(size);
        view.setTextColor(color);
        return view;
    }

    private void addChevron(LinearLayout parent) {
        TextView chevron = text("›", 28, Color.rgb(164, 164, 170));
        chevron.setPadding(dp(10), 0, 0, 0);
        parent.addView(chevron, new LinearLayout.LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
    }

    private void showChoices(String title, JSONObject options, String action) {
        if (options == null) return;
        JSONArray entries = options.optJSONArray("options");
        if (entries == null) return;
        String[] labels = new String[entries.length()];
        for (int i = 0; i < entries.length(); i++) {
            JSONObject entry = entries.optJSONObject(i);
            labels[i] = entry != null ? entry.optString("label", entry.optString("value")) : "";
        }
        new AlertDialog.Builder(getContext())
            .setTitle(title)
            .setItems(labels, (dialog, which) -> {
                JSONObject selected = entries.optJSONObject(which);
                if (selected != null) emit(action, selected.optString("value"));
            })
            .show();
    }

    private int actionBackground(String action, boolean destructive) {
        if (destructive) return Color.WHITE;
        if ("sign_in_apple".equals(action)) return Color.rgb(27, 27, 29);
        if ("sync_upload".equals(action)) return Color.rgb(0, 199, 85);
        if ("feedback".equals(action)) return Color.WHITE;
        return Color.rgb(47, 99, 246);
    }

    private int actionBorder(String action, boolean destructive) {
        if (destructive) return Color.rgb(218, 75, 69);
        if ("feedback".equals(action)) return Color.rgb(155, 184, 255);
        return Color.TRANSPARENT;
    }

    private GradientDrawable roundRect(int fillColor, int radius, int strokeColor, int strokeWidth) {
        GradientDrawable drawable = new GradientDrawable();
        drawable.setColor(fillColor);
        drawable.setCornerRadius(radius);
        if (strokeWidth > 0) drawable.setStroke(dp(strokeWidth), strokeColor);
        return drawable;
    }

    private void emit(String action, String value) {
        if (actionListener != null) actionListener.onAction(action, value);
    }

    private JSONObject object(String key) { return payload.optJSONObject(key) != null ? payload.optJSONObject(key) : new JSONObject(); }
    private String string(JSONObject object, String key, String fallback) { return object.optString(key, fallback); }
    private boolean bool(JSONObject object, String key) { return object.optBoolean(key, false); }

    private String selectedLabel(JSONObject options) {
        if (options == null) return "";
        String value = options.optString("value", "");
        JSONArray entries = options.optJSONArray("options");
        if (entries == null) return value;
        for (int i = 0; i < entries.length(); i++) {
            JSONObject entry = entries.optJSONObject(i);
            if (entry != null && value.equals(entry.optString("value"))) return entry.optString("label", value);
        }
        return value;
    }

    private int dp(int value) { return Math.round(value * getResources().getDisplayMetrics().density); }
}

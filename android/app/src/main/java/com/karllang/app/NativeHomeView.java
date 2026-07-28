package com.karllang.app;

import android.content.Context;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.view.Gravity;
import android.widget.LinearLayout;
import android.widget.FrameLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.view.View;
import org.json.JSONArray;
import org.json.JSONObject;

class NativeHomeView extends ScrollView {
    private final LinearLayout content;
    private JSONObject payload = new JSONObject();

    NativeHomeView(Context context) {
        super(context);
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
        JSONObject attendance = payload.optJSONObject("attendance");
        JSONObject progress = payload.optJSONObject("progress");
        addAttendanceCard(attendance != null ? attendance : new JSONObject());
        addProgressCard(progress != null ? progress : new JSONObject());
    }

    private void addAttendanceCard(JSONObject attendance) {
        LinearLayout card = addCard(attendance.optString("title", "Attendance"));
        LinearLayout days = new LinearLayout(getContext());
        days.setGravity(Gravity.CENTER);
        days.setPadding(0, dp(8), 0, dp(18));
        JSONArray entries = attendance.optJSONArray("days");
        if (entries != null) {
            for (int index = 0; index < entries.length(); index++) {
                JSONObject day = entries.optJSONObject(index);
                if (day == null) continue;
                days.addView(makeAttendanceDay(day), new LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1));
            }
        }
        card.addView(days);
    }

    private View makeAttendanceDay(JSONObject day) {
        LinearLayout item = new LinearLayout(getContext());
        item.setOrientation(LinearLayout.VERTICAL);
        item.setGravity(Gravity.CENTER);
        TextView label = text(day.optString("label", ""), 14, day.optBoolean("today") ? Color.rgb(30, 30, 34) : Color.rgb(105, 105, 112));
        label.setTypeface(Typeface.DEFAULT, day.optBoolean("today") ? Typeface.BOLD : Typeface.NORMAL);
        View dot = new View(getContext());
        dot.setBackground(roundRect(day.optBoolean("attended") ? Color.rgb(0, 199, 85) : Color.rgb(228, 228, 231), dp(7)));
        LinearLayout.LayoutParams dotParams = new LinearLayout.LayoutParams(dp(14), dp(14));
        dotParams.topMargin = dp(8);
        item.addView(label);
        item.addView(dot, dotParams);
        return item;
    }

    private void addProgressCard(JSONObject progress) {
        LinearLayout card = addCard(progress.optString("title", "Vocabulary progress"));
        JSONArray levels = progress.optJSONArray("levels");
        if (levels == null) return;
        for (int index = 0; index < levels.length(); index++) {
            JSONObject level = levels.optJSONObject(index);
            if (level == null) continue;
            card.addView(makeProgressRow(level));
            if (index < levels.length() - 1) addDivider(card);
        }
    }

    private View makeProgressRow(JSONObject level) {
        LinearLayout row = new LinearLayout(getContext());
        row.setOrientation(LinearLayout.VERTICAL);
        row.setPadding(0, dp(10), 0, dp(12));
        LinearLayout heading = new LinearLayout(getContext());
        heading.setGravity(Gravity.CENTER_VERTICAL);
        TextView name = text(level.optString("label", ""), 17, Color.rgb(30, 30, 34));
        name.setTypeface(Typeface.DEFAULT, Typeface.BOLD);
        TextView count = text(level.optString("count", ""), 15, Color.rgb(108, 108, 115));
        count.setGravity(Gravity.END);
        heading.addView(name, new LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1));
        heading.addView(count, new LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1));
        FrameLayout track = new FrameLayout(getContext());
        track.setBackground(roundRect(Color.rgb(231, 231, 234), dp(5)));
        View fill = new View(getContext());
        fill.setBackground(roundRect(Color.rgb(0, 199, 85), dp(5)));
        double percent = Math.max(0, Math.min(100, level.optDouble("percent", 0)));
        FrameLayout.LayoutParams fillParams = new FrameLayout.LayoutParams(0, dp(10));
        fillParams.gravity = Gravity.START;
        track.addView(fill, fillParams);
        track.post(() -> {
            fillParams.width = Math.round(track.getWidth() * (float) (percent / 100));
            fill.setLayoutParams(fillParams);
        });
        if (percent == 0) fill.setVisibility(View.INVISIBLE);
        row.addView(heading);
        LinearLayout.LayoutParams trackParams = new LinearLayout.LayoutParams(LayoutParams.MATCH_PARENT, dp(10));
        trackParams.topMargin = dp(10);
        row.addView(track, trackParams);
        return row;
    }

    private LinearLayout addCard(String title) {
        LinearLayout card = new LinearLayout(getContext());
        card.setOrientation(LinearLayout.VERTICAL);
        card.setPadding(dp(18), dp(16), dp(18), dp(8));
        card.setBackground(roundRect(Color.WHITE, dp(14)));
        TextView heading = text(title, 20, Color.rgb(31, 31, 35));
        heading.setTypeface(Typeface.DEFAULT, Typeface.BOLD);
        heading.setPadding(0, 0, 0, dp(5));
        card.addView(heading);
        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT);
        params.bottomMargin = dp(14);
        content.addView(card, params);
        return card;
    }

    private void addDivider(LinearLayout parent) {
        View divider = new View(getContext());
        divider.setBackgroundColor(Color.rgb(232, 232, 234));
        parent.addView(divider, new LinearLayout.LayoutParams(LayoutParams.MATCH_PARENT, 1));
    }

    private TextView text(String value, int size, int color) {
        TextView view = new TextView(getContext());
        view.setText(value);
        view.setTextSize(size);
        view.setTextColor(color);
        return view;
    }

    private GradientDrawable roundRect(int color, int radius) {
        GradientDrawable drawable = new GradientDrawable();
        drawable.setColor(color);
        drawable.setCornerRadius(radius);
        return drawable;
    }

    private int dp(int value) { return Math.round(value * getResources().getDisplayMetrics().density); }
}

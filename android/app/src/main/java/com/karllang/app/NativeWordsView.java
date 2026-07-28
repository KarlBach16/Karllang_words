package com.karllang.app;

import android.content.Context;
import android.app.AlertDialog;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.view.Gravity;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.EditText;
import android.text.Editable;
import android.text.TextWatcher;
import org.json.JSONArray;
import org.json.JSONObject;

class NativeWordsView extends ScrollView {
    interface NavigationListener { void onNavigate(String view); }
    interface WordActionListener { void onWordAction(String action, String wordId); }
    interface SearchActionListener { void onSearchAction(String action, String value); }

    private final LinearLayout content;
    private JSONObject payload = new JSONObject();
    private String screen = "words";
    private final NavigationListener navigationListener;
    private final WordActionListener wordActionListener;
    private final SearchActionListener searchActionListener;

    NativeWordsView(Context context, NavigationListener navigationListener, WordActionListener wordActionListener, SearchActionListener searchActionListener) {
        super(context);
        this.navigationListener = navigationListener;
        this.wordActionListener = wordActionListener;
        this.searchActionListener = searchActionListener;
        setFillViewport(true);
        setBackgroundColor(Color.rgb(247, 247, 248));
        content = new LinearLayout(context);
        content.setOrientation(LinearLayout.VERTICAL);
        content.setPadding(dp(16), dp(16), dp(16), dp(28));
        addView(content, new ScrollView.LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
    }

    void apply(JSONObject nextPayload, String nextScreen) {
        payload = nextPayload != null ? nextPayload : new JSONObject();
        screen = nextScreen != null ? nextScreen : "words";
        rebuild();
    }

    private void rebuild() {
        content.removeAllViews();
        if ("search".equals(screen)) buildSearch(); else if ("mistakes".equals(screen) || "bookmark".equals(screen)) buildList(); else buildHub();
    }

    private void buildSearch() {
        JSONObject search = payload.optJSONObject("search");
        if (search == null) search = new JSONObject();
        LinearLayout controls = new LinearLayout(getContext());
        controls.setGravity(Gravity.CENTER_VERTICAL);
        EditText input = new EditText(getContext());
        input.setSingleLine(true);
        input.setHint(search.optString("placeholder", "Search"));
        input.setText(search.optString("query"));
        input.setBackground(roundRect(Color.WHITE, dp(12)));
        input.setPadding(dp(14), 0, dp(14), 0);
        input.addTextChangedListener(new TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            public void onTextChanged(CharSequence s, int start, int before, int count) { emitSearchAction("search_query", s.toString()); }
            public void afterTextChanged(Editable s) {}
        });
        TextView mode = text(search.optString("modeLabel"), 14, Color.rgb(47, 99, 246));
        mode.setGravity(Gravity.CENTER);
        mode.setPadding(dp(10), dp(8), dp(10), dp(8));
        final JSONObject source = search;
        mode.setOnClickListener(v -> showSearchModes(source));
        controls.addView(input, new LinearLayout.LayoutParams(0, dp(48), 1));
        LinearLayout.LayoutParams modeParams = new LinearLayout.LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        modeParams.leftMargin = dp(8);
        controls.addView(mode, modeParams);
        content.addView(controls, new LinearLayout.LayoutParams(LayoutParams.MATCH_PARENT, dp(56)));
        JSONArray items = search.optJSONArray("items");
        if (items != null) for (int index = 0; index < items.length(); index++) { JSONObject item = items.optJSONObject(index); if (item != null) addWordItem(item); }
    }

    private void showSearchModes(JSONObject search) {
        JSONArray modes = search.optJSONArray("modes");
        if (modes == null) return;
        String[] labels = new String[modes.length()];
        for (int index = 0; index < modes.length(); index++) labels[index] = modes.optJSONObject(index).optString("label");
        new AlertDialog.Builder(getContext()).setItems(labels, (dialog, which) -> emitSearchAction("search_mode", modes.optJSONObject(which).optString("value"))).show();
    }

    private void buildHub() {
        JSONArray items = payload.optJSONArray("items");
        if (items == null) return;
        for (int index = 0; index < items.length(); index++) {
            JSONObject item = items.optJSONObject(index);
            if (item != null) addHubItem(item.optString("label"), item.optString("icon"), item.optString("action", "words"));
        }
    }

    private void buildList() {
        JSONObject list = payload.optJSONObject("list");
        JSONArray items = list != null ? list.optJSONArray("items") : null;
        if (items == null || items.length() == 0) {
            TextView empty = text(list != null ? list.optString("emptyLabel") : "", 16, Color.rgb(105, 105, 112));
            empty.setGravity(Gravity.CENTER);
            empty.setBackground(roundRect(Color.WHITE, dp(14)));
            content.addView(empty, new LinearLayout.LayoutParams(LayoutParams.MATCH_PARENT, dp(112)));
            return;
        }
        for (int index = 0; index < items.length(); index++) {
            JSONObject item = items.optJSONObject(index);
            if (item != null) addWordItem(item);
        }
    }

    private void addHubItem(String label, String icon, String action) {
        LinearLayout card = new LinearLayout(getContext());
        card.setGravity(Gravity.CENTER_VERTICAL);
        card.setPadding(dp(18), 0, dp(18), 0);
        card.setBackground(roundRect(Color.WHITE, dp(14)));
        card.setOnClickListener(v -> { if (navigationListener != null) navigationListener.onNavigate(action); });
        TextView iconView = text(iconGlyph(icon), 22, Color.rgb(47, 99, 246));
        iconView.setGravity(Gravity.CENTER);
        TextView title = text(label, 17, Color.rgb(31, 31, 35));
        title.setTypeface(Typeface.DEFAULT, Typeface.BOLD);
        TextView chevron = text("›", 28, Color.rgb(164, 164, 170));
        card.addView(iconView, new LinearLayout.LayoutParams(dp(28), LayoutParams.WRAP_CONTENT));
        LinearLayout.LayoutParams titleParams = new LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1);
        titleParams.leftMargin = dp(12);
        card.addView(title, titleParams);
        card.addView(chevron);
        addCard(card, dp(72));
    }

    private void addWordItem(JSONObject item) {
        String id = item.optString("id");
        LinearLayout card = new LinearLayout(getContext());
        card.setOrientation(LinearLayout.HORIZONTAL);
        card.setGravity(Gravity.CENTER_VERTICAL);
        card.setPadding(dp(18), dp(12), dp(10), dp(12));
        card.setBackground(roundRect(Color.WHITE, dp(14)));
        card.setOnClickListener(v -> emitWordAction("word_detail", id));
        LinearLayout labels = new LinearLayout(getContext());
        labels.setOrientation(LinearLayout.VERTICAL);
        TextView word = text(item.optString("word"), 18, Color.rgb(31, 31, 35));
        word.setTypeface(Typeface.DEFAULT, Typeface.BOLD);
        TextView meta = text(item.optString("meta"), 14, Color.rgb(108, 108, 115));
        meta.setMaxLines(2);
        meta.setPadding(0, dp(4), 0, 0);
        labels.addView(word);
        labels.addView(meta);
        card.addView(labels, new LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1));
        LinearLayout actions = new LinearLayout(getContext());
        actions.setGravity(Gravity.CENTER_VERTICAL);
        if (item.optBoolean("canSpeak")) actions.addView(iconButton("♪", "word_speak", id));
        actions.addView(iconButton(item.optBoolean("bookmarked") ? "★" : "☆", "word_bookmark", id));
        card.addView(actions);
        addCard(card, LayoutParams.WRAP_CONTENT);
    }

    private TextView iconButton(String label, String action, String id) {
        TextView button = text(label, 22, Color.rgb(47, 99, 246));
        button.setGravity(Gravity.CENTER);
        button.setPadding(dp(8), dp(8), dp(8), dp(8));
        button.setOnClickListener(v -> emitWordAction(action, id));
        return button;
    }

    private void addCard(View card, int height) {
        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(LayoutParams.MATCH_PARENT, height);
        params.bottomMargin = dp(12);
        content.addView(card, params);
    }

    private void emitWordAction(String action, String id) {
        if (wordActionListener != null) wordActionListener.onWordAction(action, id);
    }

    private void emitSearchAction(String action, String value) {
        if (searchActionListener != null) searchActionListener.onSearchAction(action, value);
    }

    private String iconGlyph(String icon) {
        switch (icon) { case "warning": return "!"; case "bookmark": return "★"; case "search": return "⌕"; default: return "•"; }
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

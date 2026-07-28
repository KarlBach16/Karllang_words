package com.karllang.app;

import android.os.Build;
import android.os.Bundle;
import android.graphics.Color;
import android.graphics.Typeface;
import android.view.Gravity;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.core.content.ContextCompat;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.PluginHandle;
import com.google.android.material.bottomnavigation.BottomNavigationView;

public class MainActivity extends BridgeActivity {
    private FrameLayout nativeChromeRoot;
    private LinearLayout nativeHeader;
    private TextView nativeHeaderTitle;
    private BottomNavigationView nativeBottomNavigation;
    private NativeSettingsView nativeSettingsView;
    private NativeHomeView nativeHomeView;
    private NativeWordsView nativeWordsView;
    private boolean nativeShellInstalled = false;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(NativeTTSPlugin.class);
        registerPlugin(NativeAnalyticsPlugin.class);
        registerPlugin(NativeImageSaverPlugin.class);
        registerPlugin(NativeAppSettingsPlugin.class);
        registerPlugin(NativeChromePlugin.class);
        super.onCreate(savedInstanceState);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            getBridge().getWebView().setDefaultFocusHighlightEnabled(false);
        }
        installNativeShellIfNeeded();
    }

    public int nativeChromeTopInsetDp() {
        return nativeHeader != null && nativeHeader.getVisibility() == View.VISIBLE ? 56 : 0;
    }

    public int nativeChromeBottomInsetDp() {
        return nativeBottomNavigation != null && nativeBottomNavigation.getVisibility() == View.VISIBLE ? 80 : 0;
    }

    public void applyNativeChrome(NativeChromeState state) {
        installNativeShellIfNeeded();
        nativeHeaderTitle.setText(state.getTitle());
        updateNativeTabLabels(state);
        selectNativeTab(state.getActiveTab());

        boolean isStandard = "standard".equals(state.getPresentation());
        boolean isSession = "session".equals(state.getPresentation());
        nativeHeader.setVisibility(isStandard ? View.VISIBLE : View.GONE);
        nativeBottomNavigation.setVisibility(isStandard || isSession ? View.VISIBLE : View.GONE);

        boolean showNativeSettings = isStandard && "settings".equals(state.getActiveTab());
        boolean showNativeHome = isStandard && "user".equals(state.getActiveTab());
        boolean showNativeWords = isStandard && "words".equals(state.getView());
        nativeSettingsView.apply(state.getSettings());
        nativeSettingsView.setVisibility(showNativeSettings ? View.VISIBLE : View.GONE);
        nativeHomeView.apply(state.getHome());
        nativeHomeView.setVisibility(showNativeHome ? View.VISIBLE : View.GONE);
        nativeWordsView.apply(state.getWords(), state.getView());
        nativeWordsView.setVisibility(showNativeWords ? View.VISIBLE : View.GONE);
        getBridge().getWebView().setVisibility(showNativeSettings || showNativeHome || showNativeWords ? View.INVISIBLE : View.VISIBLE);
        if (showNativeSettings || showNativeHome || showNativeWords) {
            if (showNativeSettings) nativeSettingsView.bringToFront();
            if (showNativeHome) nativeHomeView.bringToFront();
            if (showNativeWords) nativeWordsView.bringToFront();
            nativeHeader.bringToFront();
            nativeBottomNavigation.bringToFront();
        }
    }

    private void installNativeShellIfNeeded() {
        if (nativeShellInstalled) return;
        nativeShellInstalled = true;

        FrameLayout contentRoot = findViewById(android.R.id.content);
        nativeChromeRoot = new FrameLayout(this);
        nativeChromeRoot.setLayoutParams(new FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT,
            FrameLayout.LayoutParams.MATCH_PARENT
        ));
        contentRoot.addView(nativeChromeRoot);

        nativeHeader = new LinearLayout(this);
        nativeHeader.setGravity(Gravity.CENTER_VERTICAL);
        nativeHeader.setPadding(dp(20), 0, dp(20), 0);
        nativeHeader.setBackgroundColor(Color.WHITE);
        nativeHeader.setElevation(dp(1));
        nativeHeader.setVisibility(View.GONE);

        nativeHeaderTitle = new TextView(this);
        nativeHeaderTitle.setTextColor(Color.rgb(24, 26, 30));
        nativeHeaderTitle.setTextSize(22);
        nativeHeaderTitle.setTypeface(Typeface.DEFAULT, Typeface.BOLD);
        nativeHeaderTitle.setSingleLine(true);
        nativeHeader.addView(nativeHeaderTitle, new LinearLayout.LayoutParams(
            LinearLayout.LayoutParams.MATCH_PARENT,
            LinearLayout.LayoutParams.WRAP_CONTENT
        ));
        nativeChromeRoot.addView(nativeHeader, new FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT,
            dp(56),
            Gravity.TOP
        ));

        nativeBottomNavigation = new BottomNavigationView(this);
        nativeBottomNavigation.setBackgroundColor(Color.WHITE);
        nativeBottomNavigation.setItemIconTintList(ContextCompat.getColorStateList(this, android.R.color.tab_indicator_text));
        nativeBottomNavigation.setItemTextColor(ContextCompat.getColorStateList(this, android.R.color.tab_indicator_text));
        nativeBottomNavigation.setLabelVisibilityMode(BottomNavigationView.LABEL_VISIBILITY_LABELED);
        nativeBottomNavigation.setElevation(dp(8));
        nativeBottomNavigation.setVisibility(View.GONE);
        nativeBottomNavigation.getMenu().add(0, 0, 0, "Home").setIcon(android.R.drawable.ic_menu_view);
        nativeBottomNavigation.getMenu().add(0, 1, 1, "Study").setIcon(android.R.drawable.ic_menu_edit);
        nativeBottomNavigation.getMenu().add(0, 2, 2, "Drill").setIcon(android.R.drawable.ic_menu_compass);
        nativeBottomNavigation.getMenu().add(0, 3, 3, "Words").setIcon(android.R.drawable.ic_menu_agenda);
        nativeBottomNavigation.getMenu().add(0, 4, 4, "Settings").setIcon(android.R.drawable.ic_menu_manage);
        nativeBottomNavigation.setOnItemSelectedListener(item -> {
            requestNativeNavigation(nativeViewNameFor(item.getItemId()));
            return true;
        });
        nativeChromeRoot.addView(nativeBottomNavigation, new FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT,
            dp(80),
            Gravity.BOTTOM
        ));

        nativeSettingsView = new NativeSettingsView(this, (action, value) -> requestNativeSettingsAction(action, value));
        nativeSettingsView.setVisibility(View.GONE);
        FrameLayout.LayoutParams settingsParams = new FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT,
            FrameLayout.LayoutParams.MATCH_PARENT
        );
        settingsParams.topMargin = dp(56);
        settingsParams.bottomMargin = dp(80);
        nativeChromeRoot.addView(nativeSettingsView, settingsParams);
        nativeHomeView = new NativeHomeView(this);
        nativeHomeView.setVisibility(View.GONE);
        FrameLayout.LayoutParams homeParams = new FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT,
            FrameLayout.LayoutParams.MATCH_PARENT
        );
        homeParams.topMargin = dp(56);
        homeParams.bottomMargin = dp(80);
        nativeChromeRoot.addView(nativeHomeView, homeParams);
        nativeWordsView = new NativeWordsView(
            this,
            view -> requestNativeNavigation(view),
            (action, wordId) -> requestNativeWordAction(action, wordId)
            ,(action, value) -> requestNativeSearchAction(action, value)
        );
        nativeWordsView.setVisibility(View.GONE);
        FrameLayout.LayoutParams wordsParams = new FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT,
            FrameLayout.LayoutParams.MATCH_PARENT
        );
        wordsParams.topMargin = dp(56);
        wordsParams.bottomMargin = dp(80);
        nativeChromeRoot.addView(nativeWordsView, wordsParams);
        nativeHeader.bringToFront();
        nativeBottomNavigation.bringToFront();
    }

    private void updateNativeTabLabels(NativeChromeState state) {
        String[] views = {"user", "study", "training", "words", "settings"};
        for (int index = 0; index < views.length; index++) {
            String label = state.getTabLabels().optString(views[index], "");
            if (!label.isEmpty()) {
                nativeBottomNavigation.getMenu().getItem(index).setTitle(label);
            }
        }
    }

    private void selectNativeTab(String viewName) {
        int id;
        switch (viewName) {
            case "user": id = 0; break;
            case "training": id = 2; break;
            case "words": id = 3; break;
            case "settings": id = 4; break;
            case "study":
            default: id = 1; break;
        }
        nativeBottomNavigation.setSelectedItemId(id);
    }

    private String nativeViewNameFor(int itemId) {
        switch (itemId) {
            case 0: return "user";
            case 2: return "training";
            case 3: return "words";
            case 4: return "settings";
            case 1:
            default: return "study";
        }
    }

    private void requestNativeNavigation(String viewName) {
        PluginHandle handle = getBridge().getPlugin("NativeChrome");
        if (handle != null && handle.getInstance() instanceof NativeChromePlugin) {
            ((NativeChromePlugin) handle.getInstance()).emitNavigation(viewName);
        }
    }

    private void requestNativeSettingsAction(String action, String value) {
        PluginHandle handle = getBridge().getPlugin("NativeChrome");
        if (handle != null && handle.getInstance() instanceof NativeChromePlugin) {
            ((NativeChromePlugin) handle.getInstance()).emitSettingsAction(action, value);
        }
    }

    private void requestNativeWordAction(String action, String wordId) {
        PluginHandle handle = getBridge().getPlugin("NativeChrome");
        if (handle != null && handle.getInstance() instanceof NativeChromePlugin) {
            ((NativeChromePlugin) handle.getInstance()).emitWordAction(action, wordId);
        }
    }

    private void requestNativeSearchAction(String action, String value) {
        PluginHandle handle = getBridge().getPlugin("NativeChrome");
        if (handle != null && handle.getInstance() instanceof NativeChromePlugin) {
            ((NativeChromePlugin) handle.getInstance()).emitSearchAction(action, value);
        }
    }

    private int dp(int value) {
        return Math.round(value * getResources().getDisplayMetrics().density);
    }
}

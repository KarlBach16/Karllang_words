#import <Capacitor/Capacitor.h>

CAP_PLUGIN(NativeAppSettingsPlugin, "NativeAppSettings",
    CAP_PLUGIN_METHOD(openAppSettings, CAPPluginReturnPromise);
)

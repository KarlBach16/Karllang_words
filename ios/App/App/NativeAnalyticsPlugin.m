#import <Capacitor/Capacitor.h>

CAP_PLUGIN(NativeAnalyticsPlugin, "NativeAnalyticsPlugin",
  CAP_PLUGIN_METHOD(logEvent, CAPPluginReturnPromise);
)

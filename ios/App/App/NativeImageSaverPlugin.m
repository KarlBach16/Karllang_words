#import <Capacitor/Capacitor.h>

CAP_PLUGIN(NativeImageSaverPlugin, "NativeImageSaver",
    CAP_PLUGIN_METHOD(saveImage, CAPPluginReturnPromise);
)

module.exports = {
  clearCache: function (success, fail) {
    return cordova.exec(success, fail, "System", "clearCache", []);
  },
  getWebviewInfo: function (onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'get-webkit-info', []);
  },
  isPowerSaveMode: function (onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'is-powersave-mode', []);
  },
  fileAction: function (fileUri, filename, action, mimeType, onFail) {
    if (typeof action !== 'string') {
      onFail = action || function () { };
      action = filename;
      filename = '';
    } else if (typeof mimeType !== 'string') {
      onFail = mimeType || function () { };
      mimeType = action;
      action = filename;
      filename = '';
    } else if (typeof onFail !== 'function') {
      onFail = function () { };
    }

    action = "android.intent.action." + action;
    cordova.exec(function () { }, onFail, 'System', 'file-action', [fileUri, filename, action, mimeType]);
  },
  getAppInfo: function (onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'get-app-info', []);
  },
  addShortcut: function (shortcut, onSuccess, onFail) {
    var id, label, description, icon, data;
    id = shortcut.id;
    label = shortcut.label;
    description = shortcut.description;
    icon = shortcut.icon;
    data = shortcut.data;
    action = shortcut.action;
    cordova.exec(onSuccess, onFail, 'System', 'add-shortcut', [id, label, description, icon, action, data]);
  },
  removeShortcut: function (id, onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'remove-shortcut', [id]);
  },
  pinShortcut: function (id, onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'pin-shortcut', [id]);
  },
  manageAllFiles: function (onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'manage-all-files', []);
  },
  getAndroidVersion: function (onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'get-android-version', []);
  },
  isExternalStorageManager: function (onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'is-external-storage-manager', []);
  },
  requestPermission: function (permission, onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'request-permission', [permission]);
  },
  requestPermissions: function (permissions, onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'request-permissions', [permissions]);
  },
  hasPermission: function (permission, onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'has-permission', [permission]);
  },
  openInBrowser: function (src) {
    cordova.exec(null, null, 'System', 'open-in-browser', [src]);
  },
  launchApp: function (app, action, value, onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'launch-app', [app, action, value]);
  },
  inAppBrowser: function (url, title, showButtons, disableCache) {
    var myInAppBrowser = {
      onOpenExternalBrowser: null,
      onError: null,
    };

    cordova.exec(function (data) {
      try {
        var dataTag = data.split(':')[0];
        var dataUrl = data.split(':')[1];
        if (dataTag === 'onOpenExternalBrowser') {
          myInAppBrowser.onOpenExternalBrowser(dataUrl);
        }
      } catch (error) { }
    }, function (err) {
      try {
        onError(err);
      } catch (error) { }
    }, 'System', 'in-app-browser', [url, title, !!showButtons, disableCache]);
    return myInAppBrowser;
  },
  setUiTheme: function (systemBarColor, theme, onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'set-ui-theme', [systemBarColor, theme]);
  },
  setIntentHandler: function (handler, onerror) {
    cordova.exec(handler, onerror, 'System', 'set-intent-handler', []);
  },
  getCordovaIntent: function (onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'get-cordova-intent', []);
  },
  setInputType: function (type, onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'set-input-type', [type]);
  },
  getGlobalSetting: function (key, onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, 'System', 'get-global-setting', [key]);
  }
};
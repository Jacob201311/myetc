//----------------
// prefrence
// ---------------
Phoenix.set({
      daemon: false,
      openAtLogin: true
});


//----------------
// app switch
// ---------------
var KEY_ALT_SHIFT = ['alt', 'shift']

var APP_ALIAS_DICT = { // App.name()获得的是显示名，这边做个映射
    '微信': 'Wechat',
    'iTerm2': 'iTerm',
}

Key.on('q', KEY_ALT_SHIFT, function() { openApp('QQ') });
Key.on('w', KEY_ALT_SHIFT, function() { openApp('Wechat') });
Key.on('c', KEY_ALT_SHIFT, function() { openApp('Google Chrome') });
Key.on('e', KEY_ALT_SHIFT, function() { openApp('Eclipse') });
Key.on('y', KEY_ALT_SHIFT, function() { openApp('yEd') });
Key.on('t', KEY_ALT_SHIFT, function() { openApp('iTerm') });

var openApp = function(appName) {
    // 先保存上下文
    storeMouseContext();

    // 前往目的app
    var app = App.launch(appName);
    app.focus();

    // 恢复目的app的老上下文，如果有
    var point = getMouseContext(appName);
    if(!point) {
        point = app.mainWindow().topLeft();
    }
    Mouse.move(point);
};

// 保留被切换的app鼠标位置
var storeMouseContext = function() {
    var currentApp = App.focused();
    var point = Mouse.location();
    var appName = APP_ALIAS_DICT[currentApp.name()] ? APP_ALIAS_DICT[currentApp.name()] : currentApp.name();
    Storage.set(appName, point);
}

// 获取之前被切换的app鼠标位置
var getMouseContext = function(appName) {
    var point = Storage.get(appName);
    return point;
}


//----------------
// screen switch
// ---------------



//----------------
// preference
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
    '邮件': 'Mail',
    'QQ音乐': 'QQMusic',
}

Key.on('q', KEY_ALT_SHIFT, function() { openApp('QQ') });
Key.on('w', KEY_ALT_SHIFT, function() { openApp('Wechat') });
Key.on('c', KEY_ALT_SHIFT, function() { openApp('Google Chrome') });
Key.on('a', KEY_ALT_SHIFT, function() { openApp('Anki') });
Key.on('d', KEY_ALT_SHIFT, function() { openApp('Telegram') });
Key.on('y', KEY_ALT_SHIFT, function() { openApp('yEd') });
Key.on('t', KEY_ALT_SHIFT, function() { openApp('iTerm') });
Key.on('k', KEY_ALT_SHIFT, function() { openApp('Kindle') });
Key.on('m', KEY_ALT_SHIFT, function() { openApp('Mail') });
Key.on('f', KEY_ALT_SHIFT, function() { openApp('Finder') });
Key.on('e', KEY_ALT_SHIFT, function() { openApp('Notion') });
Key.on('1', KEY_ALT_SHIFT, function() { openApp('IntelliJ IDEA CE') });
Key.on('2', KEY_ALT_SHIFT, function() { openApp('Anki') });
Key.on('3', KEY_ALT_SHIFT, function() { openApp('QQMusic') })
Key.on('4', KEY_ALT_SHIFT, function() { openApp('Discord') })
Key.on('5', KEY_ALT_SHIFT, function() { openApp('企业微信') })
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
// window control
// ---------------
Key.on('tab', KEY_ALT_SHIFT, function() {  fullScreenApp() });

var fullScreenApp = function() {
    var currentApp = App.focused();
    var win = currentApp.mainWindow();
    if (!win.isFullScreen()) {
        win.setFullScreen(true);
    } else {
        Phoenix.notify(currentApp.name() + " is already full screen");
    }
}

//----------------
// mouse focus
// ---------------
Key.on('space', KEY_ALT_SHIFT, function() { mvMouseToCenter() });
Key.on('z', KEY_ALT_SHIFT, function() { showUp() });

var mvMouseToCenter = function() {
    var frame = App.focused().mainWindow().frame();
    var mvPoint = {x: frame.x + frame.width/2, y: frame.y + frame.height/2};
    Mouse.move(mvPoint);
}

var iconModal =Modal.build({appearance: 'transparent', text: '', weight: 0, duration: 1})
var showUp = function() {
    var point = Mouse.location();
    iconModal.origin = {x: point.x - iconModal.frame().width / 2 + 5, y: Screen.main().frame().height - point.y - iconModal.frame().width / 2 + 7}; // point fix use x + 5, y + 7
    iconModal.icon = App.focused().icon();
    iconModal.show();
}


//----------------
// screen switch
// ---------------

Key.on('6', KEY_ALT_SHIFT, function() { screenSwitch() });
var screenSwitch = function() {
    var screens = Screen.all();
    var spaces = screens[1].spaces();
    spaces[0].active();
}

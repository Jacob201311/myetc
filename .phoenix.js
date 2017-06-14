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
}

Key.on('q', KEY_ALT_SHIFT, function() { openApp('QQ') });
Key.on('w', KEY_ALT_SHIFT, function() { openApp('Wechat') });
Key.on('c', KEY_ALT_SHIFT, function() { openApp('Google Chrome') });
Key.on('e', KEY_ALT_SHIFT, function() { openApp('Eclipse') });
Key.on('y', KEY_ALT_SHIFT, function() { openApp('yEd') });
Key.on('t', KEY_ALT_SHIFT, function() { openApp('iTerm') });
Key.on('k', KEY_ALT_SHIFT, function() { openApp('kindle') });
Key.on('m', KEY_ALT_SHIFT, function() { openApp('Mail') });
Key.on('f', KEY_ALT_SHIFT, function() { openApp('Finder') });
Key.on('1', KEY_ALT_SHIFT, function() { openApp('IntelliJ IDEA') });
Key.on('2', KEY_ALT_SHIFT, function() { openApp('CCtalk') });

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
Key.on('tab', KEY_ALT_SHIFT, function() {  });

var maxWinSize = function() {

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



var KEY_ALT_SHIFT = ['alt', 'shift']

var qq = new Key('q', KEY_ALT_SHIFT, function () {
    var app = App.launch('QQ');
    app.focus();
    var point = app.mainWindow().topLeft();
    Mouse.move(point);
});


var wechat = new Key('w', KEY_ALT_SHIFT, function () {
    var app = App.launch('Wechat');
    app.focus();
    var point = app.mainWindow().topLeft();
    Mouse.move(point);
});

var chrome = new Key('c', KEY_ALT_SHIFT, function () {
    var app = App.launch('Google Chrome');
    app.focus();
    var point = app.mainWindow().topLeft();
    Mouse.move(point);
});

var eclipse = new Key('e', KEY_ALT_SHIFT, function () {
    var app = App.launch('Eclipse');
    app.focus();
    var point = app.mainWindow().topLeft();
    Mouse.move(point);
});

var yEd = new Key('y', KEY_ALT_SHIFT, function () {
    var app = App.launch('yEd');
    app.focus();
    var point = app.mainWindow().topLeft();
    Mouse.move(point);
});





// var handler = function(appName) {
//     var app = App.launch(appName);
//     app.focus();
//     var point = app.mainWindow().topLeft();
//     Mouse.move(point);
// };


// var qq = new Key('q', KEY_ALT_SHIFT, handler('qq'));

// var wechat = new Key('w', KEY_ALT_SHIFT, handler('Wechat'));

// var chrome = new Key('c', KEY_ALT_SHIFT, handler('Google Chrome'));



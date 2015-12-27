/*
    Date: 2015-12-25
*/

var app = {
    self : {},

    onDeviceReady : function () {
        //alert("device ready.");
        if (device.platform === "iOS") {
            alert("got iOS.");
            // hide Exit button. They don't have one on iOS devices.
            // http://www.mzcart.com/javascript-how-to-addremove-css-class-from-a-dom-element/
            document.getElementById('exitApp').classList.add("hidden");
            // deals with post-iOS-7 change that covers the status bar
            // http://coenraets.org/blog/2013/09/phonegap-and-cordova-with-ios-7/
            document.body.style.marginTop = "20px";
            // hide the Splash Screen for iOS only
            navigator.splashscreen.hide();
        } else if (device.platform == 'Android') {
            // Get rid of 300ms delay 
            document.addEventListener('DOMContentLoaded', function() { FastClick.attach(document.body); }, false);
            //
            document.getElementById('exitApp').addEventListener('click', function() {
                app.exit();
            });
        } else if (device.platform == 'browser') {
            document.getElementById('exitApp').addEventListener('click', function() {
                app.exit();
            });
        }
        plugin.test();
    },
    exit : function () {
        console.log('Called app.exit()');
        if ('app' in navigator) {
            navigator.app.exitApp();
        } else {
            alert('exit button hit.');
        }
    }
};

//
// Wait for PhoneGap to load
document.addEventListener("deviceready", app.onDeviceReady, false);

var plugin = {
    self        : {},
    directories : {},

    // Is API available?
    test : function () {
        console.log("app.test");
        $('#isavailable').html(plugin.isAvailable('requestFileSystem'));
    },
    test2 : function (data) {
        $('#resultPlugin').html(data);
    },
    test3 : function (data) {
        $('#resultPlugin').html('test3');
        var url  = cordova.file.applicationDirectory + "www/index.html";
        var url2 = cordova.file.applicationStorageDirectory;
        var url3 = cordova.file.dataDirectory;
        window.resolveLocalFileSystemURL(url, function (fileEntry) {
            $('#resultPlugin').html(fileEntry.fullPath + ":"  +  fileEntry.isFile);

            window.resolveLocalFileSystemURL(url2, function (fileEntry) {
                $('#resultPlugin').html($('#resultPlugin').html() + "<br>" + fileEntry.fullPath);

                window.resolveLocalFileSystemURL(url3, function (fileEntry) {
                    $('#resultPlugin').html($('#resultPlugin').html() + "<br>" + fileEntry.fullPath);
                });
            });
        });

    },
    test4 : function (data) {
        //$('#resultPlugin').html(data);
    },
    // See alternate method: http://code.tutsplus.com/tutorials/working-with-indexeddb--net-34673 under "Let's Get Started"
    isAvailable: function (type) {
        return (type in window) ?  true : false;
    }
};




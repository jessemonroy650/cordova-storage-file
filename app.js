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
        plugin.directories = {
            applicationDirectory : window.resolveLocalFileSystemURL(cordova.file.applicationDirectory),
            applicationStorageDirectory : window.resolveLocalFileSystemURL(cordova.file.applicationStorageDirectory),
            dataDirectory : window.resolveLocalFileSystemURL(cordova.file.dataDirectory),
            cacheDirectory : window.resolveLocalFileSystemURL(cordova.file.cacheDirectory),
            externalApplicationStorageDirectory : window.resolveLocalFileSystemURL(cordova.file.externalApplicationStorageDirectory),
            externalDataDirectory : window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory),
            externalCacheDirectory : window.resolveLocalFileSystemURL(cordova.file.externalCacheDirectory),
            externalRootDirectory : window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory)
            /* 
            tempDirectory : window.resolveLocalFileSystemURL(cordova.file.tempDirectory),
            syncedDataDirectory : window.resolveLocalFileSystemURL(cordova.file.syncedDataDirectory),
            documentsDirectory : window.resolveLocalFileSystemURL(cordova.file.documentsDirectory),
            sharedDirectory : window.resolveLocalFileSystemURL(cordova.file.sharedDirectory)
            */
        };
        $('#resultPlugin').html(data);
    },
    test4 : function (data) {
        //$('#resultPlugin').html(data);
    },
    // See alternate method: http://code.tutsplus.com/tutorials/working-with-indexeddb--net-34673 under "Let's Get Started"
    isAvailable: function (type) {
        return (type in window) ?  true : false;
    }
};




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
        $('#resultPlugin').html(data);
        var url  = cordova.file.applicationDirectory + "www/index.html";
        var url2 = cordova.file.applicationStorageDirectory;
        var url3 = cordova.file.dataDirectory;
        var url4 = cordova.file.cacheDirectory;
        window.resolveLocalFileSystemURL(url, function (fileEntry) {
            $('#resultPlugin').html(fileEntry.fullPath + ":"  +  fileEntry.isFile);

            window.resolveLocalFileSystemURL(url2, function (fileEntry) {
                $('#resultPlugin').html($('#resultPlugin').html() + "<br>" + fileEntry.fullPath  + ":"  +  fileEntry.isDirectory);

                window.resolveLocalFileSystemURL(url3, function (fileEntry) {
                    $('#resultPlugin').html($('#resultPlugin').html() + "<br>" + fileEntry.fullPath  + ":"  +  fileEntry.isDirectory);

                    window.resolveLocalFileSystemURL(url4, function (fileEntry) {
                        $('#resultPlugin').html($('#resultPlugin').html() + "<br>" + fileEntry.fullPath  + ":"  +  fileEntry.isDirectory);
                    });
                });
            });
        });
    },
    test4 : function (data) {
        $('#resultPlugin').html(data);
        var url5 = cordova.file.externalApplicationStorageDirectory;
        var url6 = cordova.file.externalDataDirectory;
        var url7 = cordova.file.externalCacheDirectory;
        var url8 = cordova.file.externalRootDirectory;
        window.resolveLocalFileSystemURL(url5, function (fileEntry) {
            $('#resultPlugin').html(fileEntry.fullPath + ":"  +  fileEntry.isDirectory);

            window.resolveLocalFileSystemURL(url6, function (fileEntry) {
                $('#resultPlugin').html($('#resultPlugin').html() + "<br>" + fileEntry.fullPath  + ":"  +  fileEntry.isDirectory);

                window.resolveLocalFileSystemURL(url7, function (fileEntry) {
                    $('#resultPlugin').html($('#resultPlugin').html() + "<br>" + fileEntry.fullPath  + ":"  +  fileEntry.isDirectory);

                    window.resolveLocalFileSystemURL(url8, function (fileEntry) {
                        $('#resultPlugin').html($('#resultPlugin').html() + "<br>" + fileEntry.fullPath  + ":"  +  fileEntry.isDirectory);
                    });
                });
            });
        });
    },
    // Read File
    test5 : function (data) {
        $('#resultPlugin').html(data);
        var url  = cordova.file.applicationDirectory + "www/README.md";

        window.resolveLocalFileSystemURL(url, function (fileEntry) {
            fileEntry.file(function(file) {

                var reader = new FileReader();

                reader.onloadend = function(e) {
                    //document.querySelector("#textArea").innerHTML = this.result;
                    $('#outputData').html(this.result);
                }

                reader.readAsText(file);
            });
        });
    },
    // write File
    test6 : function (data) {
        $('#resultPlugin').html(data);
        var url  = cordova.file.applicationStorageDirectory + "data.txt";

    },
    errorHandler : function (e) {
        var msg = '';

        switch (e.code) {
          case FileError.QUOTA_EXCEEDED_ERR:
            msg = 'QUOTA_EXCEEDED_ERR';
          break;
          case FileError.NOT_FOUND_ERR:
            msg = 'NOT_FOUND_ERR';
          break;
          case FileError.SECURITY_ERR:
            msg = 'SECURITY_ERR';
          break;
          case FileError.INVALID_MODIFICATION_ERR:
             msg = 'INVALID_MODIFICATION_ERR';
          break;
          case FileError.INVALID_STATE_ERR:
             msg = 'INVALID_STATE_ERR';
          break;
          default:
            msg = 'Unknown Error';
          break;
        };
        return msg;
    },

    // See alternate method: http://code.tutsplus.com/tutorials/working-with-indexeddb--net-34673 under "Let's Get Started"
    isAvailable: function (type) {
        return (type in window) ?  true : false;
    }
};




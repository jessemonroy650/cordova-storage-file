/*
    Date: 2015-12-25
*/
var app = {
    self : {},
    db   : {},

    // Is API available?
    test : function () {
        console.log("app.test");
        $('#storeavailable').html(app.storageAvailable('indexedDB'));
    },
    test2 : function () {
    },
    test3 : function () {
    },
    // create StoreObject
    test4 : function () {
    },
    // create data
    test5 : function () {
    },
    // read data
    test6 : function () {
    },
    // See alternate method: http://code.tutsplus.com/tutorials/working-with-indexeddb--net-34673 under "Let's Get Started"
    storageAvailable: function (type) {
        return ("indexedDB" in window) ?  true : false;
    }
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = require("../src/Helpers/Helpers");
const Settings_1 = require("../src/Settings");
const Express = require("express");
const Io = require("socket.io");
const Http = require("http");
const http = new Http.Server(Express());
const io = Io(http);
const settings = new Settings_1.Settings.Current();
io.on('connection', function (socket) {
    console.log('CONNECTION established at: ', Helpers_1.Helpers.Time.getSmallTime(new Date()));
    socket.on("clearPlayers", (msg) => {
        console.log("cmd: clear players");
    });
    socket.on("addPlayer", (player) => {
        console.log("cmd: add player");
    });
    // clear our datasheets, start our listener
    // loadObservable();
    // reset everything if we get a message to
    socket.on('chat message', function (msg) {
        if (msg == 'reset') {
            console.log('RESET fired');
            //loadObservable();
        }
    });
    socket.on('disconnect', function () {
        console.log('DISCONNECT fired');
        //getPlayerChanges.dispose();
    });
});
http.listen(settings.ServerPort, settings.ServerUrl, () => {
    console.log('http started listening on url:port ' + settings.ServerUrl + ":" + settings.ServerPort);
});
//# sourceMappingURL=ServerApp.js.map
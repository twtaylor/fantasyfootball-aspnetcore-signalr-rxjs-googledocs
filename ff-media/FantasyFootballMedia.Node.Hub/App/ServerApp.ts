
import { Helpers } from '../src/Helpers/Helpers';
import { Settings } from '../src/Settings';
import Express = require('express');

import Io = require('socket.io');

import Http = require('http');

const http = new Http.Server(Express());
const io = Io(http);
const settings = new Settings.Current();

io.on('connection', function (socket) {
    console.log('CONNECTION established at: ', Helpers.Time.getSmallTime(new Date()));

    socket.on("clearPlayers", (msg) => {
        console.log("cmd: clear players");
    })

    socket.on("addPlayer", (player) => {
        console.log("cmd: add player");
    })

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

import { Helpers } from './Helpers/Helpers';
import Express = require('express');

import Io = require('socket.io');

import Http = require('http');

let http = new Http.Server(Express());
let io = Io(http);

io.on('connection', function (socket) {
    console.log('CONNECTION established at: ', Helpers.Time.getSmallTime(new Date()));

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

http.listen(5000, () => {
    console.log('http started listening on port ' + 5000);
});
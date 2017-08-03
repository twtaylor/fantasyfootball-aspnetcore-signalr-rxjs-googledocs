System.register("Helpers/Helpers", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Helpers;
    return {
        setters: [],
        execute: function () {
            (function (Helpers) {
                var Time = (function () {
                    function Time() {
                    }
                    // gets a small date time formatted
                    Time.getSmallTime = function (date) {
                        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() +
                            ":" + date.getMilliseconds();
                    };
                    return Time;
                }());
                Helpers.Time = Time;
            })(Helpers || (Helpers = {}));
            exports_1("Helpers", Helpers);
        }
    };
});
System.register("app", ["Helpers/Helpers", "express", "socket.io", "http"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Helpers_1, Express, Io, Http, http, io;
    return {
        setters: [
            function (Helpers_1_1) {
                Helpers_1 = Helpers_1_1;
            },
            function (Express_1) {
                Express = Express_1;
            },
            function (Io_1) {
                Io = Io_1;
            },
            function (Http_1) {
                Http = Http_1;
            }
        ],
        execute: function () {
            http = new Http.Server(Express());
            io = Io(http);
            io.on('connection', function (socket) {
                console.log('CONNECTION established at: ', Helpers_1.Helpers.Time.getSmallTime(new Date()));
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
            http.listen(5000, function () {
                console.log('http started listening on port ' + 5000);
            });
        }
    };
});
System.register("Model/Player", ["mongoose"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Mongoose, Model;
    return {
        setters: [
            function (Mongoose_1) {
                Mongoose = Mongoose_1;
            }
        ],
        execute: function () {
            (function (Model) {
                var playerSchema = new Mongoose.Schema({
                    rank: { type: String, index: true },
                    player: String,
                    chosenBy: String,
                    media: String,
                    created: Date,
                    updated: Date,
                    seen: Boolean
                });
                Model.Player = Mongoose.model("Player", playerSchema);
            })(Model || (Model = {}));
            exports_3("Model", Model);
        }
    };
});
//# sourceMappingURL=tsc.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Helpers;
(function (Helpers) {
    class Time {
        // gets a small date time formatted
        static getSmallTime(date) {
            return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() +
                ":" + date.getMilliseconds();
        }
    }
    Helpers.Time = Time;
})(Helpers = exports.Helpers || (exports.Helpers = {}));
//# sourceMappingURL=Helpers.js.map
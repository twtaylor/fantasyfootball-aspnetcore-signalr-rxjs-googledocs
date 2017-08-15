export module Helpers {
    export class Time {
        // gets a small date time formatted
        static getSmallTime(date: Date) {
            return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() +
                ":" + date.getMilliseconds();
        }
    }
}
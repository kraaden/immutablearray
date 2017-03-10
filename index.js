"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImmutableArray = (function () {
    function ImmutableArray(array) {
        if (!Array.isArray(array)) {
            throw new Error("data should represent an array");
        }
        this._array = array.map(function (item) {
            var type = typeof item;
            return type === "object" || type === "function" ? Object.freeze(item) : item;
        });
    }
    Object.defineProperty(ImmutableArray.prototype, "value", {
        /**
         * Get immutable array as a regular array
         */
        get: function () {
            return this._array.slice(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImmutableArray.prototype, "length", {
        /**
         * Get length of the immutable array
         */
        get: function () {
            return this._array.length;
        },
        enumerable: true,
        configurable: true
    });
    return ImmutableArray;
}());
exports.ImmutableArray = ImmutableArray;

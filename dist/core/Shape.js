"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape extends EventTarget {
    emitChange() {
        this.dispatchEvent(new Event("change"));
    }
    assertPositiveFinite(value, fieldName) {
        if (!Number.isFinite(value) || value <= 0) {
            throw new TypeError(`${fieldName} must be a positive finite number`);
        }
    }
}
exports.Shape = Shape;

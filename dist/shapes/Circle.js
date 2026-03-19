"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("../core/Shape");
class Circle extends Shape_1.Shape {
    kind = "circle";
    _radius;
    constructor(radius) {
        super();
        this.assertPositiveFinite(radius, "radius");
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this.assertPositiveFinite(value, "radius");
        this._radius = value;
        this.emitChange();
    }
    getArea() {
        return Math.PI * this._radius ** 2;
    }
    getDiameter() {
        return this._radius * 2;
    }
    getCircumference() {
        return 2 * Math.PI * this._radius;
    }
    toJSON() {
        return {
            kind: this.kind,
            radius: this._radius,
        };
    }
}
exports.Circle = Circle;

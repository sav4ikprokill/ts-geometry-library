"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("../core/Shape");
class Rectangle extends Shape_1.Shape {
    kind = "rectangle";
    _width;
    _height;
    constructor(width, height) {
        super();
        this.assertPositiveFinite(width, "width");
        this.assertPositiveFinite(height, "height");
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this.assertPositiveFinite(value, "width");
        this._width = value;
        this.emitChange();
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this.assertPositiveFinite(value, "height");
        this._height = value;
        this.emitChange();
    }
    getArea() {
        return this._width * this._height;
    }
    getPerimeter() {
        return 2 * (this._width + this._height);
    }
    toJSON() {
        return {
            kind: this.kind,
            width: this._width,
            height: this._height,
        };
    }
}
exports.Rectangle = Rectangle;

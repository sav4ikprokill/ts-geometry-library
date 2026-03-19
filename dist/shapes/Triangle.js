"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const Shape_1 = require("../core/Shape");
class Triangle extends Shape_1.Shape {
    kind = "triangle";
    _sideA;
    _sideB;
    _sideC;
    constructor(sideA, sideB, sideC) {
        super();
        this.assertValidSides(sideA, sideB, sideC);
        this._sideA = sideA;
        this._sideB = sideB;
        this._sideC = sideC;
    }
    get sideA() {
        return this._sideA;
    }
    set sideA(value) {
        this.assertValidSides(value, this._sideB, this._sideC);
        this._sideA = value;
        this.emitChange();
    }
    get sideB() {
        return this._sideB;
    }
    set sideB(value) {
        this.assertValidSides(this._sideA, value, this._sideC);
        this._sideB = value;
        this.emitChange();
    }
    get sideC() {
        return this._sideC;
    }
    set sideC(value) {
        this.assertValidSides(this._sideA, this._sideB, value);
        this._sideC = value;
        this.emitChange();
    }
    getArea() {
        const semiPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(semiPerimeter *
            (semiPerimeter - this._sideA) *
            (semiPerimeter - this._sideB) *
            (semiPerimeter - this._sideC));
    }
    getPerimeter() {
        return this._sideA + this._sideB + this._sideC;
    }
    toJSON() {
        return {
            kind: this.kind,
            sideA: this._sideA,
            sideB: this._sideB,
            sideC: this._sideC,
        };
    }
    assertValidSides(sideA, sideB, sideC) {
        this.assertPositiveFinite(sideA, "sideA");
        this.assertPositiveFinite(sideB, "sideB");
        this.assertPositiveFinite(sideC, "sideC");
        if (sideA + sideB <= sideC ||
            sideA + sideC <= sideB ||
            sideB + sideC <= sideA) {
            throw new TypeError("Invalid triangle sides");
        }
    }
}
exports.Triangle = Triangle;

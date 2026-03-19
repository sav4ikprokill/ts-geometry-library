"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShape = createShape;
const Circle_1 = require("../shapes/Circle");
const Rectangle_1 = require("../shapes/Rectangle");
const Triangle_1 = require("../shapes/Triangle");
function createShape(init) {
    switch (init.kind) {
        case "rectangle":
            return new Rectangle_1.Rectangle(init.width, init.height);
        case "circle":
            return new Circle_1.Circle(init.radius);
        case "triangle":
            return new Triangle_1.Triangle(init.sideA, init.sideB, init.sideC);
        default: {
            const exhaustiveCheck = init;
            throw new TypeError(`Unsupported shape config: ${String(exhaustiveCheck)}`);
        }
    }
}

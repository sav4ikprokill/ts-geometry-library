import { Shape } from "../core/Shape";
export declare class Circle extends Shape {
    readonly kind = "circle";
    private _radius;
    constructor(radius: number);
    get radius(): number;
    set radius(value: number);
    getArea(): number;
    getDiameter(): number;
    getCircumference(): number;
    toJSON(): Record<string, number | string>;
}

import { Shape } from "../core/Shape";
export declare class Rectangle extends Shape {
    readonly kind = "rectangle";
    private _width;
    private _height;
    constructor(width: number, height: number);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    getArea(): number;
    getPerimeter(): number;
    toJSON(): Record<string, number | string>;
}

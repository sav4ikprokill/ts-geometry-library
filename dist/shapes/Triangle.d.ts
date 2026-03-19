import { Shape } from "../core/Shape";
export declare class Triangle extends Shape {
    readonly kind = "triangle";
    private _sideA;
    private _sideB;
    private _sideC;
    constructor(sideA: number, sideB: number, sideC: number);
    get sideA(): number;
    set sideA(value: number);
    get sideB(): number;
    set sideB(value: number);
    get sideC(): number;
    set sideC(value: number);
    getArea(): number;
    getPerimeter(): number;
    toJSON(): Record<string, number | string>;
    private assertValidSides;
}

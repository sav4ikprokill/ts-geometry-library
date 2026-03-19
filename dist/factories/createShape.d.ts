import { Shape } from "../core/Shape";
export interface RectangleShapeInit {
    kind: "rectangle";
    width: number;
    height: number;
}
export interface CircleShapeInit {
    kind: "circle";
    radius: number;
}
export interface TriangleShapeInit {
    kind: "triangle";
    sideA: number;
    sideB: number;
    sideC: number;
}
export type ShapeInit = RectangleShapeInit | CircleShapeInit | TriangleShapeInit;
export declare function createShape(init: ShapeInit): Shape;

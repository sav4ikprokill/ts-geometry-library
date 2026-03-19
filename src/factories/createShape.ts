import { Shape } from "../core/Shape";
import { Circle } from "../shapes/Circle";
import { Rectangle } from "../shapes/Rectangle";
import { Triangle } from "../shapes/Triangle";

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


export type ShapeInit =
  | RectangleShapeInit
  | CircleShapeInit
  | TriangleShapeInit;



 
export function createShape(init: ShapeInit): Shape {
  switch (init.kind) {
    case "rectangle":
      return new Rectangle(init.width, init.height);

    case "circle":
      return new Circle(init.radius);

    case "triangle":
      return new Triangle(init.sideA, init.sideB, init.sideC);

    default: {

      const exhaustiveCheck: never = init;
      throw new TypeError(`Unsupported shape config: ${String(exhaustiveCheck)}`);
    }
  }
}
import { Shape } from "../core/Shape";

export class Circle extends Shape {
  public readonly kind = "circle";

  private _radius: number;

  public constructor(radius: number) {
    super();
    this.assertPositiveFinite(radius, "radius");
    this._radius = radius;
  }

  public get radius(): number {
    return this._radius;
  }

  public set radius(value: number) {
    this.assertPositiveFinite(value, "radius");
    this._radius = value;
    this.emitChange();
  }

 
  public getArea(): number {
    return Math.PI * this._radius ** 2;
  }

 
  public getDiameter(): number {
    return this._radius * 2;
  }

  
  public getCircumference(): number {
    return 2 * Math.PI * this._radius;
  }

  public toJSON(): Record<string, number | string> {
    return {
      kind: this.kind,
      radius: this._radius,
    };
  }
}
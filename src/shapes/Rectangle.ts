import { Shape } from "../core/Shape";

export class Rectangle extends Shape {
  public readonly kind = "rectangle";

  private _width: number;
  private _height: number;

  public constructor(width: number, height: number) {
    super();
    this.assertPositiveFinite(width, "width");
    this.assertPositiveFinite(height, "height");

    this._width = width;
    this._height = height;
  }

  public get width(): number {
    return this._width;
  }

  public set width(value: number) {
    this.assertPositiveFinite(value, "width");
    this._width = value;
    this.emitChange();
  }

  public get height(): number {
    return this._height;
  }

  public set height(value: number) {
    this.assertPositiveFinite(value, "height");
    this._height = value;
    this.emitChange();
  }

  public getArea(): number {
    return this._width * this._height;
  }

  public getPerimeter(): number {
    return 2 * (this._width + this._height);
  }

  public toJSON(): Record<string, number | string> {
    return {
      kind: this.kind,
      width: this._width,
      height: this._height,
    };
  }
}
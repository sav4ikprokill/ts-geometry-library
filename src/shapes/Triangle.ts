import { Shape } from "../core/Shape";

export class Triangle extends Shape {
  public readonly kind = "triangle";

  private _sideA: number;
  private _sideB: number;
  private _sideC: number;

  public constructor(sideA: number, sideB: number, sideC: number) {
    super();

    this.assertValidSides(sideA, sideB, sideC);

    this._sideA = sideA;
    this._sideB = sideB;
    this._sideC = sideC;
  }

  public get sideA(): number {
    return this._sideA;
  }

  public set sideA(value: number) {
    this.assertValidSides(value, this._sideB, this._sideC);
    this._sideA = value;
    this.emitChange();
  }

  public get sideB(): number {
    return this._sideB;
  }

  public set sideB(value: number) {
    this.assertValidSides(this._sideA, value, this._sideC);
    this._sideB = value;
    this.emitChange();
  }

  public get sideC(): number {
    return this._sideC;
  }

  public set sideC(value: number) {
    this.assertValidSides(this._sideA, this._sideB, value);
    this._sideC = value;
    this.emitChange();
  }

  
  public getArea(): number {
    const semiPerimeter = this.getPerimeter() / 2;

    return Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this._sideA) *
        (semiPerimeter - this._sideB) *
        (semiPerimeter - this._sideC),
    );
  }

  
  public getPerimeter(): number {
    return this._sideA + this._sideB + this._sideC;
  }

  
  public toJSON(): Record<string, number | string> {
    return {
      kind: this.kind,
      sideA: this._sideA,
      sideB: this._sideB,
      sideC: this._sideC,
    };
  }

  
  private assertValidSides(sideA: number, sideB: number, sideC: number): void {
    this.assertPositiveFinite(sideA, "sideA");
    this.assertPositiveFinite(sideB, "sideB");
    this.assertPositiveFinite(sideC, "sideC");

    if (
      sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideB + sideC <= sideA
    ) {
      throw new TypeError("Invalid triangle sides");
    }
  }
}
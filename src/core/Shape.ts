export abstract class Shape extends EventTarget {
  public abstract readonly kind: string;

  
  public abstract getArea(): number;


  public abstract toJSON(): Record<string, number | string>;

  
  protected emitChange(): void {
    this.dispatchEvent(new Event("change"));
  }

  
  protected assertPositiveFinite(value: number, fieldName: string): void {
    if (!Number.isFinite(value) || value <= 0) {
      throw new TypeError(
        `${fieldName} must be a positive finite number`,
      );
    }
  }
}
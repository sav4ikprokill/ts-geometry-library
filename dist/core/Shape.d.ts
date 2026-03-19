export declare abstract class Shape extends EventTarget {
    abstract readonly kind: string;
    abstract getArea(): number;
    abstract toJSON(): Record<string, number | string>;
    protected emitChange(): void;
    protected assertPositiveFinite(value: number, fieldName: string): void;
}

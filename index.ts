
export class ImmutableArray<T>  {
    private _array: T[];

    constructor(array: T[]) {
        if (!Array.isArray(array)) {
            throw new Error("data should represent an array");
        }

        this._array = array.map(item => {
            const type = typeof item;
            return type === "object" || type === "function" ? Object.freeze(item) : item;
        });
    }

    /**
     * Get immutable array as a regular array
     */

    public get value(): T[] {
        return this._array.slice(0);
    }

    /**
     * Get length of the immutable array
     */

    public get length(): number {
        return this._array.length;
    }
}

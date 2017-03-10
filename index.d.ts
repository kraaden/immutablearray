export declare class ImmutableArray<T> {
    private _array;
    constructor(array: T[]);
    /**
     * Get immutable array as a regular array
     */
    readonly value: T[];
    /**
     * Get length of the immutable array
     */
    readonly length: number;
}

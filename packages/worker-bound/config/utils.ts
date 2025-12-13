export type BindingsMode = "throw" | "stub" | "connect";

export interface CommonBindingsInterface<T> {
    mode: BindingsMode;
    binding: string;
    bindingsObject: T;
}
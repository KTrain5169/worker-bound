export type BindingsMode = "throw" | "stub" | "connect";

export interface CommonBindingsInterface<T> {
    mode: BindingsMode;
    binding: string;
    /** enables some debug logging */
    debugLog?: boolean;
    /** only optional for {@link CommonBindingsInterface.mode throw binding mode} */
    bindingsObject?: T;
}
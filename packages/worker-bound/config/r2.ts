import { R2Bucket } from "@cloudflare/workers-types";
import { CommonBindingsInterface } from "./utils";

export interface R2ConfigInterface extends CommonBindingsInterface<R2Bucket> {
    url: string;
    compat: "cloudflare" | "aws";
}

import { D1Database } from "@cloudflare/workers-types";
import { CommonBindingsInterface } from "./utils";

export interface D1ConfigInterface extends CommonBindingsInterface<D1Database> {}

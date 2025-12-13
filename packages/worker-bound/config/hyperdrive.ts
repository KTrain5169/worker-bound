import { Hyperdrive } from "@cloudflare/workers-types";
import { CommonBindingsInterface } from "./utils";

export interface HyperdriveConfigInterface extends CommonBindingsInterface<Hyperdrive> {}

import { Fetcher } from "@cloudflare/workers-types";
import { CommonBindingsInterface } from "./utils";

export interface AssetsConfigInterface extends CommonBindingsInterface<Fetcher> {
    path: string;
    run_worker_first: boolean | string[];
}

import { AssetsConfigInterface } from "./assets";
import { D1ConfigInterface } from "./d1";
import { HyperdriveConfigInterface } from "./hyperdrive";
import { KVConfigInterface } from "./kv";
import { R2ConfigInterface } from "./r2";

export interface ConfigShape {
    workerd?: any; // workerd runtime API itself ig
    bindings?: {
        /** R2 Object Storage binding configs */
        r2: R2ConfigInterface[];
        d1: D1ConfigInterface[];
        kv: KVConfigInterface[];
        assets: AssetsConfigInterface;
        hyperdrive: HyperdriveConfigInterface[];
    };
}

interface workerdConfiguration { // needed because workerd uses Cap'n Proto, which works for normal use cases, but not for us!
    test: string;
}

export function defineConfig(config: ConfigShape) {
    return config;
}

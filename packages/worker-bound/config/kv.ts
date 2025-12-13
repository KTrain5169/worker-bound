import { CommonBindingsInterface } from './utils';
import { KVNamespace } from '@cloudflare/workers-types'

export interface KVConfigInterface extends CommonBindingsInterface<KVNamespace> {
    ttl: number;
}

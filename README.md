# worker-bound

A "plug-n-play" package for Cloudflare's `workerd` runtime that allows you to easily connect substitutes for each binding accessible to a Worker.
This is intended to be a wrapper for `workerd` that allows for easy implementations of the binding services (e.g. binding services for R2, KV, D1, etc).

## Usage

You can configure `worker-bound` by creating a `worker-bound.config.{js,mjs,cjs,ts,mts,cts}` file in your project's root directory.
An array of bindings can be set to each binding type, so long as each binding is unique (so you can't have the binding `MY_BINDING` for two different bindings.)

Each binding specified can be set to one of 3 modes:

- `throw` - If the binding is accessed, the binding will return polyfilled shims, leading to a thrown error when called.
- `stub` - A stubbed binding object is passed as the binding in the Worker. This makes it easy to test or debug your Worker.
- `connect` - Using the provided configuration, `worker-bound` will establish the binding and pass it to the Worker when the binding is accessed.

## Differences between Cloudflare's and `worker-bound`'s implementations

Due to fundamental differences between Cloudflare's setup and your setup/`worker-bound` as a package, there are some differences to keep in mind.

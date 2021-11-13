# Roadblocks

## Different Testnets

ENS supports Mainnet, Ropsten, Rinkeby, and Goerli
Chainlink Keepers: Mainnet and Kovan

Blocker: They don't have any overlapping testnets, so I'm not sure how to navigate this.
Thoughts: Maybe I create a mock contract to check the ENS availability.
Actions: I've asked in the chainlink discord for support. 
TODO: Research Mock contracts, their use cases, and if this is a good use case.

## Deploying a Mock Contract

I'm not sure why deploying `ENSRenewal.sol` works, but not `MockBaseRegistrar.sol`.

```
No need to generate any newer typings.
/home/soyboy/Code/ens-auto-registry/node_modules/ts-node/src/index.ts:750
    return new TSError(diagnosticText, diagnosticCodes);
           ^
TSError: ⨯ Unable to compile TypeScript:
scripts/deploy.ts:17:55 - error TS2339: Property 'deploy' does not exist on type 'MockBaseRegistrar__factory'.

17     const mockBaseRegistrar = await MockBaseRegistrar.deploy();
                                                         ~~~~~~

    at createTSError (/home/soyboy/Code/ens-auto-registry/node_modules/ts-node/src/index.ts:750:12)
    at reportTSError (/home/soyboy/Code/ens-auto-registry/node_modules/ts-node/src/index.ts:754:19)
    at getOutput (/home/soyboy/Code/ens-auto-registry/node_modules/ts-node/src/index.ts:941:36)
    at Object.compile (/home/soyboy/Code/ens-auto-registry/node_modules/ts-node/src/index.ts:1243:30)
    at Module.m._compile (/home/soyboy/Code/ens-auto-registry/node_modules/ts-node/src/index.ts:1370:30)
    at Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Object.require.extensions.<computed> [as .ts] (/home/soyboy/Code/ens-auto-registry/node_modules/ts-node/src/index.ts:1374:12)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12) {
  diagnosticText: "\x1B[96mscripts/deploy.ts\x1B[0m:\x1B[93m17\x1B[0m:\x1B[93m55\x1B[0m - \x1B[91merror\x1B[0m\x1B[90m TS2339: \x1B[0mProperty 'deploy' does not exist on type 'MockBaseRegistrar__factory'.\n" +
    '\n' +
    '\x1B[7m17\x1B[0m     const mockBaseRegistrar = await MockBaseRegistrar.deploy();\n' +
    '\x1B[7m  \x1B[0m \x1B[91m                                                      ~~~~~~\x1B[0m\n',
  diagnosticCodes: [ 2339 ]
}
```

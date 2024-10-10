# Create Aurora App

Quickly build apps backed by the [Aurora](https://aurora.dev/) blockchain

## Prerequisites

Make sure you have:
- a [current version of Node.js](https://nodejs.org) installed – we are targeting versions `>=18`
- [git] (https://git-scm.com/downloads) installed
- for the smart contracts development, please install `yarn` with `npm install --global yarn` or read more [here](https://classic.yarnpkg.com/lang/en/docs/install/)
- we also recommend using [pnpm](https://pnpm.io/installation) for all of your Node projects

## Getting Started

To create a new Aurora project you will need to run:

  - Create a dApp: `npx create-aurora-app@latest dapp <project-name>`      
  - Write smart-contracts `npx create-aurora-app@latest contract <project-name>`

Follow the instructions in the README.md in the project you just created! 🚀

### Contracts

You can create contracts written in Solidity.
The repo used for these is [Aurora Contract Examples](https://github.com/aurora-is-near/aurora-examples/).

It contains two smart contract development frameworks separated by folder:

- Truffle
- Hardhat

In each of these you will find a few smart contract examples. To install dependencies there just run `yarn install`.

Then, you can just investigate the file structure or read more docs about how deployment is done [here](https://doc.aurora.dev/build-a-dapp/contracts/erc-20).

### dApps

Our dApp is based on top of the React and [Wagmi](https://wagmi.sh/). 

The repo used for these is [Aurora dApp Example](https://github.com/aurora-is-near/aurora-dapp-example).

It contains the next basic functionalities for you project:

- Connecting a wallet
- Getting account data
- Sending transactions
- Reading contracts
- Writing contracts

You can read more about each of these inside the [Build A Dapp](https://doc.aurora.dev/build-a-dapp/frontend/connect-wallet) section of our documentation.

## Getting Help

Check out our [documentation](https://doc.aurora.dev/build-a-dapp/introduction) or chat with us on [Discord](https://discord.com/invite/auroralabs). We'd love to hear from you!

## Useful Resources

### Intro to EVM development

We encourage developers, who want to onboard into web3 to try using the best Ethereum onboarding resources:

- [CryptoZombies](https://cryptozombies.io/) is a great way to learn to write smart contracts for beginners.
- [SolidityByExample](https://solidity-by-example.org/) one of the best way to learn Solidity contracts by example.
- [Ethereum Speedrun](https://speedrunethereum.com/) based on [ScaffoldETH](https://scaffoldeth.io/):
a bunch of tutorials explaining how to build Dapps - NFT, ERC-20, Staking, DEX, Multisigs, etc. It starts with simpler ones and moves forward gradually to more complex examples.
- [Viem](https://viem.sh/docs/introduction) and [Wagmi](https://wagmi.sh/react/why) are the tools you will want to use to communicate between your UI and the blockchain.

To try all of the projects and tutorials mentioned above on Aurora all you need to do is to change your RPC URL and that is it!
Or in other words, just add Aurora network to your project. You can find information about the RPC endpoints [here](/dev-reference/network-endpoints).

### Aurora Developer Portal

At Aurora, we also have [Aurora's DevPortal](https://dev.aurora.dev/) to help you learn more about the specifics of the development on Aurora and how our core products work.
So, if you are already an experienced developer and want to learn more about more advanced themes, please consider visiting [it](https://dev.aurora.dev/).

 We suggest you start with the following articles:

- [Gas Price on Aurora and Near](/blog/evm-gas-near-gas-on-aurora)
- [Integration tests for XCC](/blog/communication-from-aurora-to-near-local-testing)
- [Contract callbacks in XCC](/blog/contract-callbacks-in-xcc)
- [Aurora RPC Node Architecture](/blog/spinning-up-your-own-aurora-node)

You can learn a lot from our [GitHub organization repositories](https://github.com/aurora-is-near), directly from code. Here are the most popular ones:

- [Aurora Engine](https://github.com/aurora-is-near/aurora-engine/)
- [Aurora Staking Contracts](https://github.com/aurora-is-near/aurora-staking-contracts/tree/main/docs)

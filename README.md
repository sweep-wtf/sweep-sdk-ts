# Sweep TypeScript SDK

`sweep-sdk-ts` is the official TypeScript SDK for interacting with the **Sweep Protocol** on Solana.  
It provides a simple interface for wallet cleaning, smart swaps, AI-powered reinvestment, and $SWEEP token reward tracking.

---

## Overview

This SDK is designed for developers who want to integrate Sweep functionality directly into their applications.  
It abstracts the complexity of Solana RPC calls, token swap logic, and reward tracking, allowing developers to focus on building features rather than infrastructure.

Key capabilities:
- Clear dust tokens directly from your dApp.
- Trigger Sweep smart swaps or burns with one function call.
- Query wallet performance and $SWEEP reward balances.
- Easily integrate with the **Sweep Program** on Solana Mainnet.

---

## Features

- High-level API for the Sweep Program.
- Support for automated dust detection and removal.
- Built-in TypeScript type definitions.
- Lightweight and optimized for speed.
- Compatible with Solana web3.js and Anchor clients.
- Fully ESM and CommonJS compatible.

---

## Installation

```bash
npm install @sweep-labs/sdk
```

or

```bash
yarn add @sweep-labs/sdk
```

---

## Quick Start

```typescript
import { SweepClient } from "@sweep-labs/sdk";
import { Keypair, Connection } from "@solana/web3.js";

async function main() {
  const connection = new Connection("https://api.mainnet-beta.solana.com");
  const keypair = Keypair.fromSecretKey(...);

  const sweep = new SweepClient(connection, keypair);
  const result = await sweep.sweepDust({ minOutSol: 1000 });

  console.log("Sweep completed:", result);
}

main();
```

---

## API Overview

### `SweepClient`
The primary class for interacting with the Sweep Program.

**Key Methods:**
- `sweepDust(options)` – Removes dust tokens and returns recovered SOL.
- `claimRewards()` – Claims pending $SWEEP token rewards.
- `reinvest(strategy)` – Reinvests recovered SOL using predefined strategies.
- `getPortfolioStats()` – Returns analytics for a connected wallet.

---

## Development

### Requirements
- Node.js 18+
- TypeScript 5+
- Solana CLI
- Anchor CLI (for program-related testing)

### Build
```bash
npm run build
```

### Test
```bash
npm run test
```

---

## Security

Sweep SDK is **non-custodial**. No private keys are stored or transmitted.  
Please report vulnerabilities to **security@sweep.wtf**.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Links

- **Documentation:** [https://docs.sweep.wtf](https://docs.sweep.wtf)
- **Website:** [https://sweep.wtf](https://sweep.wtf)

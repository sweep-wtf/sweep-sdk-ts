import { PublicKey, TransactionSignature } from "@solana/web3.js";
import type { InitOptions, SweepDustArgs, ReinvestArgs, PortfolioStats } from "./types";

export class SweepClient {
  private constructor(
    private readonly connection: any,
    private readonly wallet: any,
    private readonly programId: PublicKey
  ) {}

  static async init(opts: InitOptions): Promise<SweepClient> {
    const programId = new PublicKey(opts.programId);
    return new SweepClient(opts.connection, opts.wallet, programId);
  }

  async sweepDust(args: SweepDustArgs): Promise<{ signature: TransactionSignature }> {
    // TODO: implement Anchor RPC calls / custom ix calls
    // Placeholder
    return { signature: "PLACEHOLDER_TX_SIGNATURE" };
  }

  async reinvest(args: ReinvestArgs): Promise<{ signature: TransactionSignature }> {
    // TODO: implement
    return { signature: "PLACEHOLDER_TX_SIGNATURE" };
  }

  async claimRewards(): Promise<{ signature: TransactionSignature }> {
    // TODO: implement
    return { signature: "PLACEHOLDER_TX_SIGNATURE" };
  }

  async getPortfolioStats(owner: PublicKey): Promise<PortfolioStats> {
    // TODO: query on-chain data / indexer
    return {
      owner,
      totalSwept: 0n,
      rewardsEarned: 0n
    };
  }
}

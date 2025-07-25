import { SweepClient } from '../src/sweep';
import { Connection, Keypair } from '@solana/web3.js';

test('sweepDust returns success message', async () => {
  const connection = new Connection('https://api.mainnet-beta.solana.com');
  const keypair = Keypair.generate();
  const client = new SweepClient(connection, keypair);

  const result = await client.sweepDust({ minOutSol: 1000 });
  expect(result).toContain('Swept dust');
});

import { Network } from '@interest-protocol/sui-amm-sdk';
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';


const testnetClient = new SuiClient({
  url: process.env.NEXT_PUBLIC_SUI_TESTNET_RPC_URL || getFullnodeUrl('testnet'),
});
const mainnetClient = new SuiClient({
  url: process.env.NEXT_PUBLIC_SUI_MAINNET_RPC_URL || getFullnodeUrl('mainnet'),
});

const map = {
  [Network.MAINNET]: mainnetClient,
  [Network.TESTNET]: testnetClient,
} as Record<Network, SuiClient>;

export const useSuiClient = (network: Network): SuiClient => map[network];

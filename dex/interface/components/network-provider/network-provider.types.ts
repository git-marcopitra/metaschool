import { Network } from '@interest-protocol/sui-amm-sdk';
import { ReactNode } from 'react';

export interface NetworkProviderProps {
  children: ReactNode;
}

export interface NetworkProviderState {
  network: Network;
}

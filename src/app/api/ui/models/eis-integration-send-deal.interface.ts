import { LongTermVolumeAlt } from './long-term-volume-alt.interface';
import { MarketDealPosition } from './market-deal-position.interface';

// @ts-ignore
export interface EisIntegrationSendDeal {
  customContractNumber: string;
  dealId: number;
  dealPositions: MarketDealPosition[];
  executionFrom: string;
  executionTo: string;
  paymentData: LongTermVolumeAlt[];
  price: number;
}

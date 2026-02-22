import { MarketTradePersonAlt } from './market-trade-person-alt.interface';

// @ts-ignore
export interface DealSignerAlt {
  canCustomerSignDeal: boolean;
  canEditSigner: boolean;
  showSigner: boolean;
  signerPerson: MarketTradePersonAlt;
}

import { MarketOfferStatusResult } from './market-offer-status-result.interface';

// @ts-ignore
export interface MarketOfferDatesResult {
  date: string;
  status: MarketOfferStatusResult[];
}

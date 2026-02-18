import { MarketOfferStatusResult } from './market-offer-status-result.interface';

export interface MarketOfferDatesResult {
  date: string;
  status: MarketOfferStatusResult[];
}

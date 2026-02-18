import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketOfferStatusResult } from './market-offer-status-result.interface';

export type MarketJsonResultOfListOfMarketOfferStatusResult = MarketJsonVoidResultAlt & { 'data'?: Array<MarketOfferStatusResult> | null; };

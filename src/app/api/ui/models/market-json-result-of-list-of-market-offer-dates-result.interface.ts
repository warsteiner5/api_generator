import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketOfferDatesResult } from './market-offer-dates-result.interface';

export type MarketJsonResultOfListOfMarketOfferDatesResult = MarketJsonVoidResultAlt & { 'data'?: Array<MarketOfferDatesResult> | null; };

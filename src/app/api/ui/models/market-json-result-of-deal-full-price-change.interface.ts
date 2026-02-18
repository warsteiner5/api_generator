import { DealFullPriceChange } from './deal-full-price-change.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDealFullPriceChange = MarketJsonVoidResultAlt & { 'data'?: DealFullPriceChange | null; };

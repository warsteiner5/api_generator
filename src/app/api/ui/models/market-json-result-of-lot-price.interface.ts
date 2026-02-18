import { LotPriceAlt } from './lot-price-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfLotPrice = MarketJsonVoidResultAlt & { 'data'?: LotPriceAlt | null; };

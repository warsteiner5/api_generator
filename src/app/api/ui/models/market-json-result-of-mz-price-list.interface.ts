import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MzPriceList } from './mz-price-list.interface';

export type MarketJsonResultOfMzPriceList = MarketJsonVoidResultAlt & { 'data'?: MzPriceList | null; };

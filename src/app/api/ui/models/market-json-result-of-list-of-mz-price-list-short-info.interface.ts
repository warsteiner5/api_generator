import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MzPriceListShortInfo } from './mz-price-list-short-info.interface';

export type MarketJsonResultOfListOfMzPriceListShortInfo = MarketJsonVoidResultAlt & { 'data'?: Array<MzPriceListShortInfo> | null; };

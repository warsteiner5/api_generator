import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { PriceListItemAlt } from './price-list-item-alt.interface';

export type MarketJsonResultOfPriceListItem = MarketJsonVoidResultAlt & { 'data'?: PriceListItemAlt | null; };

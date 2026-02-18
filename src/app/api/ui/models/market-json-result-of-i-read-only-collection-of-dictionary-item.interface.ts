import { DictionaryItemAlt } from './dictionary-item-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIReadOnlyCollectionOfDictionaryItem = MarketJsonVoidResultAlt & { 'data'?: Array<DictionaryItemAlt> | null; };

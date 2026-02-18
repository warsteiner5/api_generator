import { EisDictionaryItemAlt } from './eis-dictionary-item-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem = MarketJsonVoidResultAlt & { 'data'?: Array<EisDictionaryItemAlt> | null; };

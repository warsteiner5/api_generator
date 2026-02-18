import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { ReadItemInfoAlt } from './read-item-info-alt.interface';

export type MarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo = MarketJsonVoidResultAlt & { 'data'?: ({ [key: string]: Array<ReadItemInfoAlt>; }) | null; };

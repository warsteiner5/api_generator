import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDictionaryOfIntegerAndInteger = MarketJsonVoidResultAlt & { 'data'?: ({ [key: string]: number; }) | null; };

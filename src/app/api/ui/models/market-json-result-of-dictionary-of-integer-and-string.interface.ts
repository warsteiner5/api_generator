import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDictionaryOfIntegerAndString = MarketJsonVoidResultAlt & { 'data'?: ({ [key: string]: string; }) | null; };

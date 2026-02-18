import { CompetitiveListMinPrice } from './competitive-list-min-price.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfCompetitiveListMinPrice = MarketJsonVoidResultAlt & { 'data'?: Array<CompetitiveListMinPrice> | null; };

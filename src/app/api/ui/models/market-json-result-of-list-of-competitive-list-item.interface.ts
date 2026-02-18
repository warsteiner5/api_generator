import { CompetitiveListItem } from './competitive-list-item.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfCompetitiveListItem = MarketJsonVoidResultAlt & { 'data'?: Array<CompetitiveListItem> | null; };

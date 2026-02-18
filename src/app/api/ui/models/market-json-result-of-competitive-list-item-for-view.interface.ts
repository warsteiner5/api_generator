import { CompetitiveListItemForView } from './competitive-list-item-for-view.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCompetitiveListItemForView = MarketJsonVoidResultAlt & { 'data'?: CompetitiveListItemForView | null; };

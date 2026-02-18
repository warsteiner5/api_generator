import { CompetitiveListItemStateEnum } from '../enums/competitive-list-item-state.enum';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCompetitiveListItemStateEnum = MarketJsonVoidResultAlt & { 'data'?: CompetitiveListItemStateEnum; };

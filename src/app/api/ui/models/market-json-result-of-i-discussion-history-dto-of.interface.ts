import { IDiscussionHistory } from './i-discussion-history.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIDiscussionHistoryDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<IDiscussionHistory> | null; };

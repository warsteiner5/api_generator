import { Discussion } from './discussion.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfDiscussion = MarketJsonVoidResultAlt & { 'data'?: Array<Discussion> | null; };

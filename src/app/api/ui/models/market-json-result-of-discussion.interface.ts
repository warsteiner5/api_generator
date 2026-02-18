import { Discussion } from './discussion.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDiscussion = MarketJsonVoidResultAlt & { 'data'?: Discussion | null; };

import { DiscussionItem } from './discussion-item.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDiscussionItem = MarketJsonVoidResultAlt & { 'data'?: DiscussionItem | null; };

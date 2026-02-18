import { DiscussionItem } from './discussion-item.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfDiscussionItem = MarketJsonVoidResultAlt & { 'data'?: Array<DiscussionItem> | null; };

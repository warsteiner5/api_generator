import { DiscussionItem } from './discussion-item.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDiscussionItemDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<DiscussionItem> | null; };

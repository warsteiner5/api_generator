import { DiscussionTitle } from './discussion-title.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfDiscussionTitle = MarketJsonVoidResultAlt & { 'data'?: Array<DiscussionTitle> | null; };

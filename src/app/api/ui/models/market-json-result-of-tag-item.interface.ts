import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TagItemAlt } from './tag-item-alt.interface';

export type MarketJsonResultOfTagItem = MarketJsonVoidResultAlt & { 'data'?: TagItemAlt | null; };

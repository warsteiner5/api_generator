import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TagView } from './tag-view.interface';

export type MarketJsonResultOfTagViewDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<TagView> | null; };

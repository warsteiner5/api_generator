import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { StarSearchObjAlt } from './star-search-obj-alt.interface';

export type MarketJsonResultOfStarSearchObj = MarketJsonVoidResultAlt & { 'data'?: StarSearchObjAlt | null; };

import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Segment } from './segment.interface';

export type MarketJsonResultOfSegment = MarketJsonVoidResultAlt & { 'data'?: Segment | null; };

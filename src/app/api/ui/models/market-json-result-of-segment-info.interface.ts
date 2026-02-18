import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SegmentInfo } from './segment-info.interface';

export type MarketJsonResultOfSegmentInfo = MarketJsonVoidResultAlt & { 'data'?: SegmentInfo | null; };

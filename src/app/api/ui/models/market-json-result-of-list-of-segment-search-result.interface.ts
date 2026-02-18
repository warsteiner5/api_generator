import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SegmentSearchResult } from './segment-search-result.interface';

export type MarketJsonResultOfListOfSegmentSearchResult = MarketJsonVoidResultAlt & { 'data'?: Array<SegmentSearchResult> | null; };

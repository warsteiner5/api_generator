import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Region } from './region.interface';

export type MarketJsonResultOfListOfRegion = MarketJsonVoidResultAlt & { 'data'?: Array<Region> | null; };

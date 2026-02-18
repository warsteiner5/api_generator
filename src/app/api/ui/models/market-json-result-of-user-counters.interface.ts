import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { UserCounters } from './user-counters.interface';

export type MarketJsonResultOfUserCounters = MarketJsonVoidResultAlt & { 'data'?: UserCounters | null; };

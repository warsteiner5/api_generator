import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Metric } from './metric.interface';

export type MarketJsonResultOfIEnumerableOfMetric = MarketJsonVoidResultAlt & { 'data'?: Array<Metric> | null; };

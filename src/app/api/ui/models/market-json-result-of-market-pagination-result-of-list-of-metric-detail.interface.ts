import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfMetricDetail } from './market-pagination-result-of-list-of-metric-detail.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfMetricDetail = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfMetricDetail | null; };

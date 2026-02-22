import { MetricDetail } from './metric-detail.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfMetricDetail {
  currentPage: number;
  items: MetricDetail[];
  total: number;
  totalPages: number;
}

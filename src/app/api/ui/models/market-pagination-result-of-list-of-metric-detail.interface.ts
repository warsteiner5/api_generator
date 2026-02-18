import { MetricDetail } from './metric-detail.interface';

export interface MarketPaginationResultOfListOfMetricDetail {
  currentPage: number;
  items: MetricDetail[];
  total: number;
  totalPages: number;
}

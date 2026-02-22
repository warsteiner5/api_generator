import { ApiMarketPaginationResultOfListOfMetricDetailDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-metric-detail-dto';
import { MarketPaginationResultOfListOfMetricDetail } from '../../models/market-pagination-result-of-list-of-metric-detail.interface';
import { metricDetailAdapter } from './metric-detail.adapter';

export const marketPaginationResultOfListOfMetricDetailAdapter = (source?: ApiMarketPaginationResultOfListOfMetricDetailDto | null): MarketPaginationResultOfListOfMetricDetail => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => metricDetailAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

import { ApiMarketPaginationResultOfListOfMetricDetailDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-metric-detail-dto';
import { MarketPaginationResultOfListOfMetricDetail } from '../../models/market-pagination-result-of-list-of-metric-detail.interface';
import { adaptMetricDetailToUI } from './metric-detail.adapter';

export function adaptMarketPaginationResultOfListOfMetricDetailToUI(source?: ApiMarketPaginationResultOfListOfMetricDetailDto | null): MarketPaginationResultOfListOfMetricDetail {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptMetricDetailToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

import { MarketPaginationResultOfListOfMetricDetail } from '../../models/market-pagination-result-of-list-of-metric-detail.interface';
import { ApiMarketPaginationResultOfListOfMetricDetailDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-metric-detail-dto';
import { apiMetricDetailDtoAdapter } from './api-metric-detail-dto.adapter';

export const apiMarketPaginationResultOfListOfMetricDetailDtoAdapter = (source?: MarketPaginationResultOfListOfMetricDetail | null): ApiMarketPaginationResultOfListOfMetricDetailDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiMetricDetailDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

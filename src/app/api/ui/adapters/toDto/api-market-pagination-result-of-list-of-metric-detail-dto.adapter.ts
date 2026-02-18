import { MarketPaginationResultOfListOfMetricDetail } from '../../models/market-pagination-result-of-list-of-metric-detail.interface';
import { ApiMarketPaginationResultOfListOfMetricDetailDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-metric-detail-dto';
import { adaptApiMetricDetailDto } from './api-metric-detail-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfMetricDetailDto(source?: MarketPaginationResultOfListOfMetricDetail | null): ApiMarketPaginationResultOfListOfMetricDetailDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiMetricDetailDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

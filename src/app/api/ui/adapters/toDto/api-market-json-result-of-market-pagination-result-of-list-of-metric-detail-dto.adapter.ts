import { MarketJsonResultOfMarketPaginationResultOfListOfMetricDetail } from '../../models/market-json-result-of-market-pagination-result-of-list-of-metric-detail.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-metric-detail-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfMetricDetail | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto;
}

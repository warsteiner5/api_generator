import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-metric-detail-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfMetricDetail } from '../../models/market-json-result-of-market-pagination-result-of-list-of-metric-detail.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto | null): MarketJsonResultOfMarketPaginationResultOfListOfMetricDetail {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfMetricDetail;
}

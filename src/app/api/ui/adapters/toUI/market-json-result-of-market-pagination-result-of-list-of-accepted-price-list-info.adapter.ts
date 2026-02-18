import { ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-accepted-price-list-info-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-accepted-price-list-info.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto | null): MarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfo {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfo;
}

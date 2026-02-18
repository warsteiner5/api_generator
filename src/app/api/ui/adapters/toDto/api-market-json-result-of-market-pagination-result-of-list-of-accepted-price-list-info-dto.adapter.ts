import { MarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-accepted-price-list-info.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-accepted-price-list-info-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfo | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto;
}

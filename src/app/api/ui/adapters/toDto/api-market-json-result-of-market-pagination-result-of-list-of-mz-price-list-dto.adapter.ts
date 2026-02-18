import { MarketJsonResultOfMarketPaginationResultOfListOfMzPriceList } from '../../models/market-json-result-of-market-pagination-result-of-list-of-mz-price-list.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-mz-price-list-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfMzPriceList | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto;
}

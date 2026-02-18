import { MarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGrid } from '../../models/market-json-result-of-market-pagination-result-of-list-of-nic-registry-grid.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-nic-registry-grid-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGrid | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto;
}

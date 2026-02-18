import { ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-nic-registry-grid-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGrid } from '../../models/market-json-result-of-market-pagination-result-of-list-of-nic-registry-grid.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto | null): MarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGrid {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGrid;
}

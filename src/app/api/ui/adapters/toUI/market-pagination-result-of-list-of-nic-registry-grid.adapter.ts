import { ApiMarketPaginationResultOfListOfNicRegistryGridDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-nic-registry-grid-dto';
import { MarketPaginationResultOfListOfNicRegistryGrid } from '../../models/market-pagination-result-of-list-of-nic-registry-grid.interface';
import { adaptNicRegistryGridToUI } from './nic-registry-grid.adapter';

export function adaptMarketPaginationResultOfListOfNicRegistryGridToUI(source?: ApiMarketPaginationResultOfListOfNicRegistryGridDto | null): MarketPaginationResultOfListOfNicRegistryGrid {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptNicRegistryGridToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

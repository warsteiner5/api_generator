import { ApiMarketPaginationResultOfListOfNicRegistryGridDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-nic-registry-grid-dto';
import { MarketPaginationResultOfListOfNicRegistryGrid } from '../../models/market-pagination-result-of-list-of-nic-registry-grid.interface';
import { nicRegistryGridAdapter } from './nic-registry-grid.adapter';

export const marketPaginationResultOfListOfNicRegistryGridAdapter = (source?: ApiMarketPaginationResultOfListOfNicRegistryGridDto | null): MarketPaginationResultOfListOfNicRegistryGrid => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => nicRegistryGridAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

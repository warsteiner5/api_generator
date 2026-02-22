import { MarketPaginationResultOfListOfNicRegistryGrid } from '../../models/market-pagination-result-of-list-of-nic-registry-grid.interface';
import { ApiMarketPaginationResultOfListOfNicRegistryGridDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-nic-registry-grid-dto';
import { apiNicRegistryGridDtoAdapter } from './api-nic-registry-grid-dto.adapter';

export const apiMarketPaginationResultOfListOfNicRegistryGridDtoAdapter = (source?: MarketPaginationResultOfListOfNicRegistryGrid | null): ApiMarketPaginationResultOfListOfNicRegistryGridDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiNicRegistryGridDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

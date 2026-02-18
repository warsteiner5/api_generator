import { MarketPaginationResultOfListOfNicRegistryGrid } from '../../models/market-pagination-result-of-list-of-nic-registry-grid.interface';
import { ApiMarketPaginationResultOfListOfNicRegistryGridDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-nic-registry-grid-dto';
import { adaptApiNicRegistryGridDto } from './api-nic-registry-grid-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfNicRegistryGridDto(source?: MarketPaginationResultOfListOfNicRegistryGrid | null): ApiMarketPaginationResultOfListOfNicRegistryGridDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiNicRegistryGridDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

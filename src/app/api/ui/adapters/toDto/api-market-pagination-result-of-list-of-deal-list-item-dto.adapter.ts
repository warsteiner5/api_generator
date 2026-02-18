import { MarketPaginationResultOfListOfDealListItem } from '../../models/market-pagination-result-of-list-of-deal-list-item.interface';
import { ApiMarketPaginationResultOfListOfDealListItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-deal-list-item-dto';
import { adaptApiDealListItemDto } from './api-deal-list-item-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfDealListItemDto(source?: MarketPaginationResultOfListOfDealListItem | null): ApiMarketPaginationResultOfListOfDealListItemDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiDealListItemDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

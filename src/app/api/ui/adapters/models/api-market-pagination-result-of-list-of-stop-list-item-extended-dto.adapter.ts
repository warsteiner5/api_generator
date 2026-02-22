import { MarketPaginationResultOfListOfStopListItemExtended } from '../../models/market-pagination-result-of-list-of-stop-list-item-extended.interface';
import { ApiMarketPaginationResultOfListOfStopListItemExtendedDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-stop-list-item-extended-dto';
import { apiStopListItemExtendedDtoAdapter } from './api-stop-list-item-extended-dto.adapter';

export const apiMarketPaginationResultOfListOfStopListItemExtendedDtoAdapter = (source?: MarketPaginationResultOfListOfStopListItemExtended | null): ApiMarketPaginationResultOfListOfStopListItemExtendedDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiStopListItemExtendedDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

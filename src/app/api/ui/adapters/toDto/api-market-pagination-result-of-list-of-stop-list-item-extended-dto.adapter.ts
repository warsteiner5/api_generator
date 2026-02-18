import { MarketPaginationResultOfListOfStopListItemExtended } from '../../models/market-pagination-result-of-list-of-stop-list-item-extended.interface';
import { ApiMarketPaginationResultOfListOfStopListItemExtendedDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-stop-list-item-extended-dto';
import { adaptApiStopListItemExtendedDto } from './api-stop-list-item-extended-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfStopListItemExtendedDto(source?: MarketPaginationResultOfListOfStopListItemExtended | null): ApiMarketPaginationResultOfListOfStopListItemExtendedDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiStopListItemExtendedDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

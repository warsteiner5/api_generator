import { ApiMarketPaginationResultOfListOfStopListItemExtendedDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-stop-list-item-extended-dto';
import { MarketPaginationResultOfListOfStopListItemExtended } from '../../models/market-pagination-result-of-list-of-stop-list-item-extended.interface';
import { stopListItemExtendedAdapter } from './stop-list-item-extended.adapter';

export const marketPaginationResultOfListOfStopListItemExtendedAdapter = (source?: ApiMarketPaginationResultOfListOfStopListItemExtendedDto | null): MarketPaginationResultOfListOfStopListItemExtended => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => stopListItemExtendedAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

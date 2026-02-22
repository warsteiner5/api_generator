import { MarketPaginationResultOfListOfDealInfoAlt } from '../../models/market-pagination-result-of-list-of-deal-info-alt.interface';
import { ApiMarketPaginationResultOfListOfDealInfoAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-deal-info';
import { apiDealInfoAltDtoAdapter } from './api-deal-info.adapter';

export const apiMarketPaginationResultOfListOfDealInfoAltDtoAdapter = (source?: MarketPaginationResultOfListOfDealInfoAlt | null): ApiMarketPaginationResultOfListOfDealInfoAltDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiDealInfoAltDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

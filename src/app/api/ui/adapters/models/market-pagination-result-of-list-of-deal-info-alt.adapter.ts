import { ApiMarketPaginationResultOfListOfDealInfoAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-deal-info';
import { MarketPaginationResultOfListOfDealInfoAlt } from '../../models/market-pagination-result-of-list-of-deal-info-alt.interface';
import { dealInfoAltAdapter } from './deal-info-alt.adapter';

export const marketPaginationResultOfListOfDealInfoAltAdapter = (source?: ApiMarketPaginationResultOfListOfDealInfoAltDto | null): MarketPaginationResultOfListOfDealInfoAlt => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => dealInfoAltAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

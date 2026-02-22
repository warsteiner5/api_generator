import { ApiMarketPaginationResultOfListOfMarketDealAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-deal';
import { MarketPaginationResultOfListOfMarketDealAlt } from '../../models/market-pagination-result-of-list-of-market-deal-alt.interface';
import { marketDealAltAdapter } from './market-deal-alt.adapter';

export const marketPaginationResultOfListOfMarketDealAltAdapter = (source?: ApiMarketPaginationResultOfListOfMarketDealAltDto | null): MarketPaginationResultOfListOfMarketDealAlt => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => marketDealAltAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

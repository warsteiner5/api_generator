import { ApiMarketPaginationResultOfListOfMarketDealAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-deal';
import { MarketPaginationResultOfListOfMarketDealAlt } from '../../models/market-pagination-result-of-list-of-market-deal-alt.interface';
import { adaptMarketDealAltToUI } from './market-deal-alt.adapter';

export function adaptMarketPaginationResultOfListOfMarketDealAltToUI(source?: ApiMarketPaginationResultOfListOfMarketDealAltDto | null): MarketPaginationResultOfListOfMarketDealAlt {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptMarketDealAltToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

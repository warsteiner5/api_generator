import { ApiMarketPaginationResultOfListOfDealInfoAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-deal-info';
import { MarketPaginationResultOfListOfDealInfoAlt } from '../../models/market-pagination-result-of-list-of-deal-info-alt.interface';
import { adaptDealInfoAltToUI } from './deal-info-alt.adapter';

export function adaptMarketPaginationResultOfListOfDealInfoAltToUI(source?: ApiMarketPaginationResultOfListOfDealInfoAltDto | null): MarketPaginationResultOfListOfDealInfoAlt {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptDealInfoAltToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

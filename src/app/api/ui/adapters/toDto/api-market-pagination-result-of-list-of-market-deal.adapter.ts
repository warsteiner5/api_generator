import { MarketPaginationResultOfListOfMarketDealAlt } from '../../models/market-pagination-result-of-list-of-market-deal-alt.interface';
import { ApiMarketPaginationResultOfListOfMarketDealAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-deal';
import { adaptApiMarketDealAltDto } from './api-market-deal.adapter';

export function adaptApiMarketPaginationResultOfListOfMarketDealAltDto(source?: MarketPaginationResultOfListOfMarketDealAlt | null): ApiMarketPaginationResultOfListOfMarketDealAltDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiMarketDealAltDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

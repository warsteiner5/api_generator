import { MarketPaginationResultOfListOfDealInfoAlt } from '../../models/market-pagination-result-of-list-of-deal-info-alt.interface';
import { ApiMarketPaginationResultOfListOfDealInfoAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-deal-info';
import { adaptApiDealInfoAltDto } from './api-deal-info.adapter';

export function adaptApiMarketPaginationResultOfListOfDealInfoAltDto(source?: MarketPaginationResultOfListOfDealInfoAlt | null): ApiMarketPaginationResultOfListOfDealInfoAltDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiDealInfoAltDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

import { ApiMarketPaginationResultOfListOfPartnerDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-partner-dto';
import { MarketPaginationResultOfListOfPartner } from '../../models/market-pagination-result-of-list-of-partner.interface';
import { adaptPartnerToUI } from './partner.adapter';

export function adaptMarketPaginationResultOfListOfPartnerToUI(source?: ApiMarketPaginationResultOfListOfPartnerDto | null): MarketPaginationResultOfListOfPartner {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptPartnerToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

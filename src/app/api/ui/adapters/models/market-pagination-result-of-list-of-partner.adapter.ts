import { ApiMarketPaginationResultOfListOfPartnerDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-partner-dto';
import { MarketPaginationResultOfListOfPartner } from '../../models/market-pagination-result-of-list-of-partner.interface';
import { partnerAdapter } from './partner.adapter';

export const marketPaginationResultOfListOfPartnerAdapter = (source?: ApiMarketPaginationResultOfListOfPartnerDto | null): MarketPaginationResultOfListOfPartner => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => partnerAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

import { MarketPaginationResultOfListOfPartner } from '../../models/market-pagination-result-of-list-of-partner.interface';
import { ApiMarketPaginationResultOfListOfPartnerDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-partner-dto';
import { apiPartnerDtoAdapter } from './api-partner-dto.adapter';

export const apiMarketPaginationResultOfListOfPartnerDtoAdapter = (source?: MarketPaginationResultOfListOfPartner | null): ApiMarketPaginationResultOfListOfPartnerDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiPartnerDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

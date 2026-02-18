import { MarketPaginationResultOfListOfPartner } from '../../models/market-pagination-result-of-list-of-partner.interface';
import { ApiMarketPaginationResultOfListOfPartnerDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-partner-dto';
import { adaptApiPartnerDto } from './api-partner-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfPartnerDto(source?: MarketPaginationResultOfListOfPartner | null): ApiMarketPaginationResultOfListOfPartnerDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiPartnerDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

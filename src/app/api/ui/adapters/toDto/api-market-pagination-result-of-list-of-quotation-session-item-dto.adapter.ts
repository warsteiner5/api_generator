import { MarketPaginationResultOfListOfQuotationSessionItem } from '../../models/market-pagination-result-of-list-of-quotation-session-item.interface';
import { ApiMarketPaginationResultOfListOfQuotationSessionItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-quotation-session-item-dto';
import { adaptApiQuotationSessionItemDto } from './api-quotation-session-item-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfQuotationSessionItemDto(source?: MarketPaginationResultOfListOfQuotationSessionItem | null): ApiMarketPaginationResultOfListOfQuotationSessionItemDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiQuotationSessionItemDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

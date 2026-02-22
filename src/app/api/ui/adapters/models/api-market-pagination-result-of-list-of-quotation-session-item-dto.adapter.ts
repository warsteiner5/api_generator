import { MarketPaginationResultOfListOfQuotationSessionItem } from '../../models/market-pagination-result-of-list-of-quotation-session-item.interface';
import { ApiMarketPaginationResultOfListOfQuotationSessionItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-quotation-session-item-dto';
import { apiQuotationSessionItemDtoAdapter } from './api-quotation-session-item-dto.adapter';

export const apiMarketPaginationResultOfListOfQuotationSessionItemDtoAdapter = (source?: MarketPaginationResultOfListOfQuotationSessionItem | null): ApiMarketPaginationResultOfListOfQuotationSessionItemDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiQuotationSessionItemDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

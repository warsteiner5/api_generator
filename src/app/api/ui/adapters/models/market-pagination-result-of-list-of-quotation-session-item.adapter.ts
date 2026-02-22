import { ApiMarketPaginationResultOfListOfQuotationSessionItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-quotation-session-item-dto';
import { MarketPaginationResultOfListOfQuotationSessionItem } from '../../models/market-pagination-result-of-list-of-quotation-session-item.interface';
import { quotationSessionItemAdapter } from './quotation-session-item.adapter';

export const marketPaginationResultOfListOfQuotationSessionItemAdapter = (source?: ApiMarketPaginationResultOfListOfQuotationSessionItemDto | null): MarketPaginationResultOfListOfQuotationSessionItem => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => quotationSessionItemAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

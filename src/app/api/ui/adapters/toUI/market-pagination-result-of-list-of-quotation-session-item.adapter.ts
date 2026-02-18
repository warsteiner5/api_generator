import { ApiMarketPaginationResultOfListOfQuotationSessionItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-quotation-session-item-dto';
import { MarketPaginationResultOfListOfQuotationSessionItem } from '../../models/market-pagination-result-of-list-of-quotation-session-item.interface';
import { adaptQuotationSessionItemToUI } from './quotation-session-item.adapter';

export function adaptMarketPaginationResultOfListOfQuotationSessionItemToUI(source?: ApiMarketPaginationResultOfListOfQuotationSessionItemDto | null): MarketPaginationResultOfListOfQuotationSessionItem {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptQuotationSessionItemToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

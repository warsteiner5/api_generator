import { ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-quotation-session-item-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-quotation-session-item.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto | null): MarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItem {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItem;
}

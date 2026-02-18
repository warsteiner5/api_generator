import { MarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-quotation-session-item.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-quotation-session-item-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItem | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto;
}

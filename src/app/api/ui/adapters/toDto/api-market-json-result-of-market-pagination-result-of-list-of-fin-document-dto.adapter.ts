import { MarketJsonResultOfMarketPaginationResultOfListOfFinDocument } from '../../models/market-json-result-of-market-pagination-result-of-list-of-fin-document.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-fin-document-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfFinDocument | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto;
}

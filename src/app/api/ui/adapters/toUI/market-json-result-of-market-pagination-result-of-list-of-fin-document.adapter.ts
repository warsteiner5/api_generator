import { ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-fin-document-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfFinDocument } from '../../models/market-json-result-of-market-pagination-result-of-list-of-fin-document.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto | null): MarketJsonResultOfMarketPaginationResultOfListOfFinDocument {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfFinDocument;
}

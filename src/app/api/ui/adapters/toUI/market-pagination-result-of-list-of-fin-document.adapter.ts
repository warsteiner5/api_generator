import { ApiMarketPaginationResultOfListOfFinDocumentDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-fin-document-dto';
import { MarketPaginationResultOfListOfFinDocument } from '../../models/market-pagination-result-of-list-of-fin-document.interface';
import { adaptFinDocumentToUI } from './fin-document.adapter';

export function adaptMarketPaginationResultOfListOfFinDocumentToUI(source?: ApiMarketPaginationResultOfListOfFinDocumentDto | null): MarketPaginationResultOfListOfFinDocument {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptFinDocumentToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

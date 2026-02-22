import { ApiMarketPaginationResultOfListOfFinDocumentDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-fin-document-dto';
import { MarketPaginationResultOfListOfFinDocument } from '../../models/market-pagination-result-of-list-of-fin-document.interface';
import { finDocumentAdapter } from './fin-document.adapter';

export const marketPaginationResultOfListOfFinDocumentAdapter = (source?: ApiMarketPaginationResultOfListOfFinDocumentDto | null): MarketPaginationResultOfListOfFinDocument => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => finDocumentAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

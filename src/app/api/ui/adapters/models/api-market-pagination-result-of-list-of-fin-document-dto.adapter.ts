import { MarketPaginationResultOfListOfFinDocument } from '../../models/market-pagination-result-of-list-of-fin-document.interface';
import { ApiMarketPaginationResultOfListOfFinDocumentDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-fin-document-dto';
import { apiFinDocumentDtoAdapter } from './api-fin-document-dto.adapter';

export const apiMarketPaginationResultOfListOfFinDocumentDtoAdapter = (source?: MarketPaginationResultOfListOfFinDocument | null): ApiMarketPaginationResultOfListOfFinDocumentDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiFinDocumentDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

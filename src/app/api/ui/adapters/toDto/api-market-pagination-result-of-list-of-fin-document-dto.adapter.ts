import { MarketPaginationResultOfListOfFinDocument } from '../../models/market-pagination-result-of-list-of-fin-document.interface';
import { ApiMarketPaginationResultOfListOfFinDocumentDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-fin-document-dto';
import { adaptApiFinDocumentDto } from './api-fin-document-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfFinDocumentDto(source?: MarketPaginationResultOfListOfFinDocument | null): ApiMarketPaginationResultOfListOfFinDocumentDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiFinDocumentDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

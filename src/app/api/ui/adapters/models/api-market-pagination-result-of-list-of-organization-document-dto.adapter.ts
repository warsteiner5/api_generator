import { MarketPaginationResultOfListOfOrganizationDocument } from '../../models/market-pagination-result-of-list-of-organization-document.interface';
import { ApiMarketPaginationResultOfListOfOrganizationDocumentDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-organization-document-dto';
import { apiOrganizationDocumentDtoAdapter } from './api-organization-document-dto.adapter';

export const apiMarketPaginationResultOfListOfOrganizationDocumentDtoAdapter = (source?: MarketPaginationResultOfListOfOrganizationDocument | null): ApiMarketPaginationResultOfListOfOrganizationDocumentDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiOrganizationDocumentDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

import { ApiMarketPaginationResultOfListOfOrganizationDocumentDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-organization-document-dto';
import { MarketPaginationResultOfListOfOrganizationDocument } from '../../models/market-pagination-result-of-list-of-organization-document.interface';
import { organizationDocumentAdapter } from './organization-document.adapter';

export const marketPaginationResultOfListOfOrganizationDocumentAdapter = (source?: ApiMarketPaginationResultOfListOfOrganizationDocumentDto | null): MarketPaginationResultOfListOfOrganizationDocument => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => organizationDocumentAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

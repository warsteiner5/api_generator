import { ApiMarketPaginationResultOfListOfOrganizationDocumentDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-organization-document-dto';
import { MarketPaginationResultOfListOfOrganizationDocument } from '../../models/market-pagination-result-of-list-of-organization-document.interface';
import { adaptOrganizationDocumentToUI } from './organization-document.adapter';

export function adaptMarketPaginationResultOfListOfOrganizationDocumentToUI(source?: ApiMarketPaginationResultOfListOfOrganizationDocumentDto | null): MarketPaginationResultOfListOfOrganizationDocument {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptOrganizationDocumentToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

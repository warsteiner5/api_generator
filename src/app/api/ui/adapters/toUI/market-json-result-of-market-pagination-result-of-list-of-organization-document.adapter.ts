import { ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-organization-document-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocument } from '../../models/market-json-result-of-market-pagination-result-of-list-of-organization-document.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto | null): MarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocument {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocument;
}

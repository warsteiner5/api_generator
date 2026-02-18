import { MarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocument } from '../../models/market-json-result-of-market-pagination-result-of-list-of-organization-document.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-organization-document-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocument | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto;
}

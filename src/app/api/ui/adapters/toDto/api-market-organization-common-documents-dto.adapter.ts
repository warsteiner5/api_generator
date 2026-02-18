import { MarketOrganizationCommonDocuments } from '../../models/market-organization-common-documents.interface';
import { ApiMarketOrganizationCommonDocumentsDto } from '../../../swagger/models/api-market-organization-common-documents-dto';
import { adaptApiMarketOrganizationRegistryDocumentDto } from './api-market-organization-registry-document-dto.adapter';

export function adaptApiMarketOrganizationCommonDocumentsDto(source?: MarketOrganizationCommonDocuments | null): ApiMarketOrganizationCommonDocumentsDto {
  return {
    OtherDocuments: (source?.otherDocuments ?? []).map((item) => adaptApiMarketOrganizationRegistryDocumentDto(item)),
    PowerOfAttorneies: (source?.powerOfAttorneies ?? []).map((item) => adaptApiMarketOrganizationRegistryDocumentDto(item)),
  };
}

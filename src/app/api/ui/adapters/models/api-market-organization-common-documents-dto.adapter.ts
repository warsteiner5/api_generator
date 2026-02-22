import { MarketOrganizationCommonDocuments } from '../../models/market-organization-common-documents.interface';
import { ApiMarketOrganizationCommonDocumentsDto } from '../../../swagger/models/api-market-organization-common-documents-dto';
import { apiMarketOrganizationRegistryDocumentDtoAdapter } from './api-market-organization-registry-document-dto.adapter';

export const apiMarketOrganizationCommonDocumentsDtoAdapter = (source?: MarketOrganizationCommonDocuments | null): ApiMarketOrganizationCommonDocumentsDto => {
  return {
    OtherDocuments: source?.otherDocuments?.map((item) => apiMarketOrganizationRegistryDocumentDtoAdapter(item)),
    PowerOfAttorneies: source?.powerOfAttorneies?.map((item) => apiMarketOrganizationRegistryDocumentDtoAdapter(item)),
  };
}

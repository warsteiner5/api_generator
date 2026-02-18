import { ApiMarketOrganizationCommonDocumentsDto } from '../../../swagger/models/api-market-organization-common-documents-dto';
import { MarketOrganizationCommonDocuments } from '../../models/market-organization-common-documents.interface';
import { adaptMarketOrganizationRegistryDocumentToUI } from './market-organization-registry-document.adapter';

export function adaptMarketOrganizationCommonDocumentsToUI(source?: ApiMarketOrganizationCommonDocumentsDto | null): MarketOrganizationCommonDocuments {
  return {
    otherDocuments: (source?.OtherDocuments ?? []).map((item) => adaptMarketOrganizationRegistryDocumentToUI(item)),
    powerOfAttorneies: (source?.PowerOfAttorneies ?? []).map((item) => adaptMarketOrganizationRegistryDocumentToUI(item)),
  };
}

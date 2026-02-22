import { ApiMarketOrganizationCommonDocumentsDto } from '../../../swagger/models/api-market-organization-common-documents-dto';
import { MarketOrganizationCommonDocuments } from '../../models/market-organization-common-documents.interface';
import { marketOrganizationRegistryDocumentAdapter } from './market-organization-registry-document.adapter';

export const marketOrganizationCommonDocumentsAdapter = (source?: ApiMarketOrganizationCommonDocumentsDto | null): MarketOrganizationCommonDocuments => {
  return {
    otherDocuments: source?.OtherDocuments?.map((item) => marketOrganizationRegistryDocumentAdapter(item)),
    powerOfAttorneies: source?.PowerOfAttorneies?.map((item) => marketOrganizationRegistryDocumentAdapter(item)),
  };
}

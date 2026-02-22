import { ApiMarketOrganizationRegistryDocumentDto } from '../../../swagger/models/api-market-organization-registry-document-dto';
import { MarketOrganizationRegistryDocument } from '../../models/market-organization-registry-document.interface';

export const marketOrganizationRegistryDocumentAdapter = (source?: ApiMarketOrganizationRegistryDocumentDto | null): MarketOrganizationRegistryDocument => {
  return {
    createDate: source?.CreateDate,
    customType: source?.CustomType,
    extension: source?.Extension,
    fileGuid: source?.FileGuid,
    fileSize: source?.FileSize,
    hasCertificate: source?.HasCertificate,
    isActual: source?.IsActual,
    isSystem: source?.IsSystem,
    name: source?.Name,
    signThump: source?.SignThump,
    type: source?.Type,
  };
}

import { ApiMarketOrganizationRegistryDocumentDto } from '../../../swagger/models/api-market-organization-registry-document-dto';
import { MarketOrganizationRegistryDocument } from '../../models/market-organization-registry-document.interface';

export function adaptMarketOrganizationRegistryDocumentToUI(source?: ApiMarketOrganizationRegistryDocumentDto | null): MarketOrganizationRegistryDocument {
  return {
    createDate: source?.CreateDate ?? '',
    customType: source?.CustomType ?? '',
    extension: source?.Extension ?? '',
    fileGuid: source?.FileGuid ?? '',
    fileSize: source?.FileSize ?? 0,
    hasCertificate: source?.HasCertificate ?? false,
    isActual: source?.IsActual ?? false,
    isSystem: source?.IsSystem ?? false,
    name: source?.Name ?? '',
    signThump: source?.SignThump ?? '',
    type: source?.Type ?? '',
  };
}

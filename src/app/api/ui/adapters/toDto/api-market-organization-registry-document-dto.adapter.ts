import { MarketOrganizationRegistryDocument } from '../../models/market-organization-registry-document.interface';
import { ApiMarketOrganizationRegistryDocumentDto } from '../../../swagger/models/api-market-organization-registry-document-dto';

export function adaptApiMarketOrganizationRegistryDocumentDto(source?: MarketOrganizationRegistryDocument | null): ApiMarketOrganizationRegistryDocumentDto {
  return {
    CreateDate: source?.createDate,
    CustomType: source?.customType,
    Extension: source?.extension,
    FileGuid: source?.fileGuid,
    FileSize: source?.fileSize,
    HasCertificate: source?.hasCertificate,
    IsActual: source?.isActual,
    IsSystem: source?.isSystem,
    Name: source?.name,
    SignThump: source?.signThump,
    Type: source?.type,
  };
}

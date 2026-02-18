import { MarketOrganizationDocumentTypeEnum } from '../../enums/market-organization-document-type.enum';
import { ApiMarketOrganizationDocumentTypeEnum } from '../../../swagger/models/api-market-organization-document-type-enum';

export function adaptApiMarketOrganizationDocumentTypeEnum(source?: MarketOrganizationDocumentTypeEnum | null): ApiMarketOrganizationDocumentTypeEnum {
  switch (source) {
    case MarketOrganizationDocumentTypeEnum.AccreditationDocument:
      return ApiMarketOrganizationDocumentTypeEnum.AccreditationDocument;
    case MarketOrganizationDocumentTypeEnum.OrganizationDocument:
      return ApiMarketOrganizationDocumentTypeEnum.OrganizationDocument;
    case MarketOrganizationDocumentTypeEnum.AwardsAndCerts:
      return ApiMarketOrganizationDocumentTypeEnum.AwardsAndCerts;
    case MarketOrganizationDocumentTypeEnum.Presentations:
      return ApiMarketOrganizationDocumentTypeEnum.Presentations;
    case MarketOrganizationDocumentTypeEnum.ConfirmingDocument:
      return ApiMarketOrganizationDocumentTypeEnum.ConfirmingDocument;
    case MarketOrganizationDocumentTypeEnum.PhotoGallery:
      return ApiMarketOrganizationDocumentTypeEnum.PhotoGallery;
    default:
      throw new Error(`Enum value is not defined: MarketOrganizationDocumentTypeEnum=${String(source)}`);
  }
}

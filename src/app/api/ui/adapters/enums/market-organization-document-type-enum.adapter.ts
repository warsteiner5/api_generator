import { ApiMarketOrganizationDocumentTypeEnum } from '../../../swagger/models/api-market-organization-document-type-enum';
import { MarketOrganizationDocumentTypeEnum } from '../../enums/market-organization-document-type.enum';

export const marketOrganizationDocumentTypeEnumAdapter = (source?: ApiMarketOrganizationDocumentTypeEnum | null): MarketOrganizationDocumentTypeEnum => {
  switch (source) {
    case ApiMarketOrganizationDocumentTypeEnum.AccreditationDocument:
      return MarketOrganizationDocumentTypeEnum.AccreditationDocument;
    case ApiMarketOrganizationDocumentTypeEnum.OrganizationDocument:
      return MarketOrganizationDocumentTypeEnum.OrganizationDocument;
    case ApiMarketOrganizationDocumentTypeEnum.AwardsAndCerts:
      return MarketOrganizationDocumentTypeEnum.AwardsAndCerts;
    case ApiMarketOrganizationDocumentTypeEnum.Presentations:
      return MarketOrganizationDocumentTypeEnum.Presentations;
    case ApiMarketOrganizationDocumentTypeEnum.ConfirmingDocument:
      return MarketOrganizationDocumentTypeEnum.ConfirmingDocument;
    case ApiMarketOrganizationDocumentTypeEnum.PhotoGallery:
      return MarketOrganizationDocumentTypeEnum.PhotoGallery;
    default:
      throw new Error(`Enum value is not defined: ApiMarketOrganizationDocumentTypeEnum=${String(source)}`);
  }
}

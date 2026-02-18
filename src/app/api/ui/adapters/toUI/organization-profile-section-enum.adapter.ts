import { ApiOrganizationProfileSectionEnum } from '../../../swagger/models/api-organization-profile-section-enum';
import { OrganizationProfileSectionEnum } from '../../enums/organization-profile-section.enum';

export function adaptOrganizationProfileSectionEnumToUI(source?: ApiOrganizationProfileSectionEnum | null): OrganizationProfileSectionEnum {
  switch (source) {
    case ApiOrganizationProfileSectionEnum.Unknown:
      return OrganizationProfileSectionEnum.Unknown;
    case ApiOrganizationProfileSectionEnum.Logo:
      return OrganizationProfileSectionEnum.Logo;
    case ApiOrganizationProfileSectionEnum.Cover:
      return OrganizationProfileSectionEnum.Cover;
    case ApiOrganizationProfileSectionEnum.Description:
      return OrganizationProfileSectionEnum.Description;
    case ApiOrganizationProfileSectionEnum.Industries:
      return OrganizationProfileSectionEnum.Industries;
    case ApiOrganizationProfileSectionEnum.Products:
      return OrganizationProfileSectionEnum.Products;
    case ApiOrganizationProfileSectionEnum.Contacts:
      return OrganizationProfileSectionEnum.Contacts;
    case ApiOrganizationProfileSectionEnum.Gallery:
      return OrganizationProfileSectionEnum.Gallery;
    case ApiOrganizationProfileSectionEnum.Videos:
      return OrganizationProfileSectionEnum.Videos;
    case ApiOrganizationProfileSectionEnum.Documents:
      return OrganizationProfileSectionEnum.Documents;
    case ApiOrganizationProfileSectionEnum.DeliveryRegions:
      return OrganizationProfileSectionEnum.DeliveryRegions;
    default:
      throw new Error(`Enum value is not defined: ApiOrganizationProfileSectionEnum=${String(source)}`);
  }
}

import { OrganizationProfileSectionEnum } from '../../enums/organization-profile-section.enum';
import { ApiOrganizationProfileSectionEnum } from '../../../swagger/models/api-organization-profile-section-enum';

export function adaptApiOrganizationProfileSectionEnum(source?: OrganizationProfileSectionEnum | null): ApiOrganizationProfileSectionEnum {
  switch (source) {
    case OrganizationProfileSectionEnum.Unknown:
      return ApiOrganizationProfileSectionEnum.Unknown;
    case OrganizationProfileSectionEnum.Logo:
      return ApiOrganizationProfileSectionEnum.Logo;
    case OrganizationProfileSectionEnum.Cover:
      return ApiOrganizationProfileSectionEnum.Cover;
    case OrganizationProfileSectionEnum.Description:
      return ApiOrganizationProfileSectionEnum.Description;
    case OrganizationProfileSectionEnum.Industries:
      return ApiOrganizationProfileSectionEnum.Industries;
    case OrganizationProfileSectionEnum.Products:
      return ApiOrganizationProfileSectionEnum.Products;
    case OrganizationProfileSectionEnum.Contacts:
      return ApiOrganizationProfileSectionEnum.Contacts;
    case OrganizationProfileSectionEnum.Gallery:
      return ApiOrganizationProfileSectionEnum.Gallery;
    case OrganizationProfileSectionEnum.Videos:
      return ApiOrganizationProfileSectionEnum.Videos;
    case OrganizationProfileSectionEnum.Documents:
      return ApiOrganizationProfileSectionEnum.Documents;
    case OrganizationProfileSectionEnum.DeliveryRegions:
      return ApiOrganizationProfileSectionEnum.DeliveryRegions;
    default:
      throw new Error(`Enum value is not defined: OrganizationProfileSectionEnum=${String(source)}`);
  }
}

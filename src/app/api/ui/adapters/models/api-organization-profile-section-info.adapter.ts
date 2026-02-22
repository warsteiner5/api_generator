import { OrganizationProfileSectionInfoAlt } from '../../models/organization-profile-section-info-alt.interface';
import { ApiOrganizationProfileSectionInfoAltDto } from '../../../swagger/models/api-organization-profile-section-info';
import { apiOrganizationProfileSectionEnumAdapter } from '../enums/api-organization-profile-section-enum.adapter';

export const apiOrganizationProfileSectionInfoAltDtoAdapter = (source?: OrganizationProfileSectionInfoAlt | null): ApiOrganizationProfileSectionInfoAltDto => {
  return {
    IsFilled: source?.isFilled,
    ProfileSectionType: source?.profileSectionType === null ? undefined : apiOrganizationProfileSectionEnumAdapter(source?.profileSectionType),
    Weight: source?.weight,
  };
}

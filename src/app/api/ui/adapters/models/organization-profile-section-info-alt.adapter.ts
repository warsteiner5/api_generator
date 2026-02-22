import { ApiOrganizationProfileSectionInfoAltDto } from '../../../swagger/models/api-organization-profile-section-info';
import { OrganizationProfileSectionInfoAlt } from '../../models/organization-profile-section-info-alt.interface';
import { organizationProfileSectionEnumAdapter } from '../enums/organization-profile-section-enum.adapter';

export const organizationProfileSectionInfoAltAdapter = (source?: ApiOrganizationProfileSectionInfoAltDto | null): OrganizationProfileSectionInfoAlt => {
  return {
    isFilled: source?.IsFilled,
    profileSectionType: source?.ProfileSectionType === null ? undefined : organizationProfileSectionEnumAdapter(source?.ProfileSectionType),
    weight: source?.Weight,
  };
}

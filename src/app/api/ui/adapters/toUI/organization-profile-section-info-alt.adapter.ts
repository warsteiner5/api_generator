import { ApiOrganizationProfileSectionInfoAltDto } from '../../../swagger/models/api-organization-profile-section-info';
import { OrganizationProfileSectionInfoAlt } from '../../models/organization-profile-section-info-alt.interface';
import { adaptOrganizationProfileSectionEnumToUI } from './organization-profile-section-enum.adapter';

export function adaptOrganizationProfileSectionInfoAltToUI(source?: ApiOrganizationProfileSectionInfoAltDto | null): OrganizationProfileSectionInfoAlt {
  return {
    isFilled: source?.IsFilled ?? false,
    profileSectionType: adaptOrganizationProfileSectionEnumToUI(source?.ProfileSectionType),
    weight: source?.Weight ?? 0,
  };
}

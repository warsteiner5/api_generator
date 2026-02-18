import { OrganizationProfileSectionInfoAlt } from '../../models/organization-profile-section-info-alt.interface';
import { ApiOrganizationProfileSectionInfoAltDto } from '../../../swagger/models/api-organization-profile-section-info';
import { adaptApiOrganizationProfileSectionEnum } from './api-organization-profile-section-enum.adapter';

export function adaptApiOrganizationProfileSectionInfoAltDto(source?: OrganizationProfileSectionInfoAlt | null): ApiOrganizationProfileSectionInfoAltDto {
  return {
    IsFilled: source?.isFilled,
    ProfileSectionType: adaptApiOrganizationProfileSectionEnum(source?.profileSectionType),
    Weight: source?.weight,
  };
}

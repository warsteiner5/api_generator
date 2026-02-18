import { OrganizationProfileSectionEnum } from '../enums/organization-profile-section.enum';

export interface OrganizationProfileSectionInfoAlt {
  isFilled: boolean;
  profileSectionType: OrganizationProfileSectionEnum;
  weight: number;
}

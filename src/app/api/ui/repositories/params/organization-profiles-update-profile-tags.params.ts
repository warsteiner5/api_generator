import { OrganizationProfilesUpdateProfileTags$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-tags';
import { OrganizationTag } from '../../models/organization-tag.interface';
import { adaptApiOrganizationTagDto } from '../../adapters/toDto/api-organization-tag-dto.adapter';

export interface OrganizationProfilesUpdateProfileTagsParams {
  body?: OrganizationTag[];
}

export const organizationProfilesUpdateProfileTagsParamsAdapter = {
  adapt(params?: OrganizationProfilesUpdateProfileTagsParams): OrganizationProfilesUpdateProfileTags$Params {
    if (!params) {
      return {} as OrganizationProfilesUpdateProfileTags$Params;
    }
    return {
      body: (params.body ?? []).map((item) => adaptApiOrganizationTagDto(item)),
    };
  }
};

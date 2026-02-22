import { OrganizationProfilesUpdateProfileTags$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-tags';
import { OrganizationTag } from '../../models/organization-tag.interface';
import { apiOrganizationTagDtoAdapter } from '../../adapters/models/api-organization-tag-dto.adapter';

// @ts-ignore
export interface OrganizationProfilesUpdateProfileTagsParams {
  body?: OrganizationTag[];
}

export function organizationProfilesUpdateProfileTagsAdapter(params?: OrganizationProfilesUpdateProfileTagsParams): OrganizationProfilesUpdateProfileTags$Params {
  if (!params) {
    return {} as OrganizationProfilesUpdateProfileTags$Params;
  }
  return {
      body: (params.body ?? []).map((item) => apiOrganizationTagDtoAdapter(item)),
  };
}

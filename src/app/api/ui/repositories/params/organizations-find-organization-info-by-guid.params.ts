import { OrganizationsFindOrganizationInfoByGuid$Params } from '../../../swagger/fn/organizations/organizations-find-organization-info-by-guid';

// @ts-ignore
export interface OrganizationsFindOrganizationInfoByGuidParams {
  guid: string;
}

export function organizationsFindOrganizationInfoByGuidAdapter(params?: OrganizationsFindOrganizationInfoByGuidParams): OrganizationsFindOrganizationInfoByGuid$Params {
  if (!params) {
    return {} as OrganizationsFindOrganizationInfoByGuid$Params;
  }
  return {
      guid: params.guid,
  };
}

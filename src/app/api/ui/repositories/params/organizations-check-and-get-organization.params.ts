import { OrganizationsCheckAndGetOrganization$Params } from '../../../swagger/fn/organizations/organizations-check-and-get-organization';

// @ts-ignore
export interface OrganizationsCheckAndGetOrganizationParams {
  inn: string;
  kpp?: string;
}

export function organizationsCheckAndGetOrganizationAdapter(params?: OrganizationsCheckAndGetOrganizationParams): OrganizationsCheckAndGetOrganization$Params {
  if (!params) {
    return {} as OrganizationsCheckAndGetOrganization$Params;
  }
  return {
      inn: params.inn,
      kpp: params.kpp,
  };
}

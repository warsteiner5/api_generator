import { OrganizationsCheckAndGetOrganization$Params } from '../../../swagger/fn/organizations/organizations-check-and-get-organization';

export interface OrganizationsCheckAndGetOrganizationParams {
  inn: string;
  kpp?: string;
}

export const organizationsCheckAndGetOrganizationParamsAdapter = {
  adapt(params?: OrganizationsCheckAndGetOrganizationParams): OrganizationsCheckAndGetOrganization$Params {
    if (!params) {
      return {} as OrganizationsCheckAndGetOrganization$Params;
    }
    return {
      inn: params.inn,
      kpp: params.kpp,
    };
  }
};

import { OrganizationIsMsp$Params } from '../../../swagger/fn/organization/organization-is-msp';

export interface OrganizationIsMspParams {
  id: number;
}

export const organizationIsMspParamsAdapter = {
  adapt(params?: OrganizationIsMspParams): OrganizationIsMsp$Params {
    if (!params) {
      return {} as OrganizationIsMsp$Params;
    }
    return {
      id: params.id,
    };
  }
};

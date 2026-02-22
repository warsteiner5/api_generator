import { OrganizationIsMsp$Params } from '../../../swagger/fn/organization/organization-is-msp';

// @ts-ignore
export interface OrganizationIsMspParams {
  id: number;
}

export function organizationIsMspAdapter(params?: OrganizationIsMspParams): OrganizationIsMsp$Params {
  if (!params) {
    return {} as OrganizationIsMsp$Params;
  }
  return {
      id: params.id,
  };
}

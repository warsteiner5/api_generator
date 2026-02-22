import { OrganizationsGetEmployees$Params } from '../../../swagger/fn/organizations/organizations-get-employees';

// @ts-ignore
export interface OrganizationsGetEmployeesParams {
}

export function organizationsGetEmployeesAdapter(params?: OrganizationsGetEmployeesParams): OrganizationsGetEmployees$Params {
  if (!params) {
    return {} as OrganizationsGetEmployees$Params;
  }
  return {
  };
}

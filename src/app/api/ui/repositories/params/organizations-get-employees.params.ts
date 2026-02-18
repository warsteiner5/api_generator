import { OrganizationsGetEmployees$Params } from '../../../swagger/fn/organizations/organizations-get-employees';

export interface OrganizationsGetEmployeesParams {
}

export const organizationsGetEmployeesParamsAdapter = {
  adapt(params?: OrganizationsGetEmployeesParams): OrganizationsGetEmployees$Params {
    if (!params) {
      return {} as OrganizationsGetEmployees$Params;
    }
    return {
    };
  }
};

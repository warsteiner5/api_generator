import { RolesGetRoleInitial$Params } from '../../../swagger/fn/roles/roles-get-role-initial';

export interface RolesGetRoleInitialParams {
}

export const rolesGetRoleInitialParamsAdapter = {
  adapt(params?: RolesGetRoleInitialParams): RolesGetRoleInitial$Params {
    if (!params) {
      return {} as RolesGetRoleInitial$Params;
    }
    return {
    };
  }
};

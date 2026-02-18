import { RolesGetRole$Params } from '../../../swagger/fn/roles/roles-get-role';

export interface RolesGetRoleParams {
  id: number;
  withPermissions?: boolean;
}

export const rolesGetRoleParamsAdapter = {
  adapt(params?: RolesGetRoleParams): RolesGetRole$Params {
    if (!params) {
      return {} as RolesGetRole$Params;
    }
    return {
      id: params.id,
      withPermissions: params.withPermissions,
    };
  }
};

import { RolesDeleteRole$Params } from '../../../swagger/fn/roles/roles-delete-role';

export interface RolesDeleteRoleParams {
  id: number;
}

export const rolesDeleteRoleParamsAdapter = {
  adapt(params?: RolesDeleteRoleParams): RolesDeleteRole$Params {
    if (!params) {
      return {} as RolesDeleteRole$Params;
    }
    return {
      id: params.id,
    };
  }
};

import { RolesDeactivateRole$Params } from '../../../swagger/fn/roles/roles-deactivate-role';

export interface RolesDeactivateRoleParams {
  id: number;
}

export const rolesDeactivateRoleParamsAdapter = {
  adapt(params?: RolesDeactivateRoleParams): RolesDeactivateRole$Params {
    if (!params) {
      return {} as RolesDeactivateRole$Params;
    }
    return {
      id: params.id,
    };
  }
};

import { RolesActivateRole$Params } from '../../../swagger/fn/roles/roles-activate-role';

export interface RolesActivateRoleParams {
  id: number;
}

export const rolesActivateRoleParamsAdapter = {
  adapt(params?: RolesActivateRoleParams): RolesActivateRole$Params {
    if (!params) {
      return {} as RolesActivateRole$Params;
    }
    return {
      id: params.id,
    };
  }
};

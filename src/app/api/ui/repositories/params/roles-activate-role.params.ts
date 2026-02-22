import { RolesActivateRole$Params } from '../../../swagger/fn/roles/roles-activate-role';

// @ts-ignore
export interface RolesActivateRoleParams {
  id: number;
}

export function rolesActivateRoleAdapter(params?: RolesActivateRoleParams): RolesActivateRole$Params {
  if (!params) {
    return {} as RolesActivateRole$Params;
  }
  return {
      id: params.id,
  };
}

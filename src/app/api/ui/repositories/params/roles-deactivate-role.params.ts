import { RolesDeactivateRole$Params } from '../../../swagger/fn/roles/roles-deactivate-role';

// @ts-ignore
export interface RolesDeactivateRoleParams {
  id: number;
}

export function rolesDeactivateRoleAdapter(params?: RolesDeactivateRoleParams): RolesDeactivateRole$Params {
  if (!params) {
    return {} as RolesDeactivateRole$Params;
  }
  return {
      id: params.id,
  };
}

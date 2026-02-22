import { RolesGetRole$Params } from '../../../swagger/fn/roles/roles-get-role';

// @ts-ignore
export interface RolesGetRoleParams {
  id: number;
  withPermissions?: boolean;
}

export function rolesGetRoleAdapter(params?: RolesGetRoleParams): RolesGetRole$Params {
  if (!params) {
    return {} as RolesGetRole$Params;
  }
  return {
      id: params.id,
      withPermissions: params.withPermissions,
  };
}

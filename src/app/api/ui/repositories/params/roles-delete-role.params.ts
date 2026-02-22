import { RolesDeleteRole$Params } from '../../../swagger/fn/roles/roles-delete-role';

// @ts-ignore
export interface RolesDeleteRoleParams {
  id: number;
}

export function rolesDeleteRoleAdapter(params?: RolesDeleteRoleParams): RolesDeleteRole$Params {
  if (!params) {
    return {} as RolesDeleteRole$Params;
  }
  return {
      id: params.id,
  };
}

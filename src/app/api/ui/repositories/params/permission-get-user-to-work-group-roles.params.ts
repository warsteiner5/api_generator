import { PermissionGetUserToWorkGroupRoles$Params } from '../../../swagger/fn/permission/permission-get-user-to-work-group-roles';

// @ts-ignore
export interface PermissionGetUserToWorkGroupRolesParams {
  lk: number;
}

export function permissionGetUserToWorkGroupRolesAdapter(params?: PermissionGetUserToWorkGroupRolesParams): PermissionGetUserToWorkGroupRoles$Params {
  if (!params) {
    return {} as PermissionGetUserToWorkGroupRoles$Params;
  }
  return {
      lk: params.lk,
  };
}

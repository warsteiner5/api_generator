import { PermissionGetUserToWorkGroupRoles$Params } from '../../../swagger/fn/permission/permission-get-user-to-work-group-roles';

export interface PermissionGetUserToWorkGroupRolesParams {
  lk: number;
}

export const permissionGetUserToWorkGroupRolesParamsAdapter = {
  adapt(params?: PermissionGetUserToWorkGroupRolesParams): PermissionGetUserToWorkGroupRoles$Params {
    if (!params) {
      return {} as PermissionGetUserToWorkGroupRoles$Params;
    }
    return {
      lk: params.lk,
    };
  }
};

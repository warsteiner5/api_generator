import { RolePermissionGroup } from '../../models/role-permission-group.interface';
import { ApiRolePermissionGroupDto } from '../../../swagger/models/api-role-permission-group-dto';
import { adaptApiRolePermissionDto } from './api-role-permission-dto.adapter';

export function adaptApiRolePermissionGroupDto(source?: RolePermissionGroup | null): ApiRolePermissionGroupDto {
  return {
    Id: source?.id,
    Name: source?.name,
    Permissions: (source?.permissions ?? []).map((item) => adaptApiRolePermissionDto(item)),
  };
}

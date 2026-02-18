import { RoleDetailResponseAlt } from '../../models/role-detail-response-alt.interface';
import { ApiRoleDetailResponseAltDto } from '../../../swagger/models/api-role-detail-response';
import { adaptApiRolePermissionGroupDto } from './api-role-permission-group-dto.adapter';

export function adaptApiRoleDetailResponseAltDto(source?: RoleDetailResponseAlt | null): ApiRoleDetailResponseAltDto {
  return {
    Description: source?.description,
    Id: source?.id,
    Name: source?.name,
    PermissionGroups: (source?.permissionGroups ?? []).map((item) => adaptApiRolePermissionGroupDto(item)),
  };
}

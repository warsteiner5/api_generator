import { UpdateRoleRequestAlt } from '../../models/update-role-request-alt.interface';
import { ApiUpdateRoleRequestAltDto } from '../../../swagger/models/api-update-role-request';
import { adaptApiRolePermissionGroupDto } from './api-role-permission-group-dto.adapter';

export function adaptApiUpdateRoleRequestAltDto(source?: UpdateRoleRequestAlt | null): ApiUpdateRoleRequestAltDto {
  return {
    Description: source?.description,
    Name: source?.name,
    PermissionGroups: (source?.permissionGroups ?? []).map((item) => adaptApiRolePermissionGroupDto(item)),
  };
}

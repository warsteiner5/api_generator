import { CreateRoleRequestAlt } from '../../models/create-role-request-alt.interface';
import { ApiCreateRoleRequestAltDto } from '../../../swagger/models/api-create-role-request';
import { adaptApiRolePermissionGroupDto } from './api-role-permission-group-dto.adapter';

export function adaptApiCreateRoleRequestAltDto(source?: CreateRoleRequestAlt | null): ApiCreateRoleRequestAltDto {
  return {
    Description: source?.description,
    Name: source?.name,
    PermissionGroups: (source?.permissionGroups ?? []).map((item) => adaptApiRolePermissionGroupDto(item)),
  };
}

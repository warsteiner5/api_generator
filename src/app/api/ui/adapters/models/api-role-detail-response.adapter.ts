import { RoleDetailResponseAlt } from '../../models/role-detail-response-alt.interface';
import { ApiRoleDetailResponseAltDto } from '../../../swagger/models/api-role-detail-response';
import { apiRolePermissionGroupDtoAdapter } from './api-role-permission-group-dto.adapter';

export const apiRoleDetailResponseAltDtoAdapter = (source?: RoleDetailResponseAlt | null): ApiRoleDetailResponseAltDto => {
  return {
    Description: source?.description,
    Id: source?.id,
    Name: source?.name,
    PermissionGroups: source?.permissionGroups?.map((item) => apiRolePermissionGroupDtoAdapter(item)),
  };
}

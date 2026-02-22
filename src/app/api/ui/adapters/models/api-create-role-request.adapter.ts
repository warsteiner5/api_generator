import { CreateRoleRequestAlt } from '../../models/create-role-request-alt.interface';
import { ApiCreateRoleRequestAltDto } from '../../../swagger/models/api-create-role-request';
import { apiRolePermissionGroupDtoAdapter } from './api-role-permission-group-dto.adapter';

export const apiCreateRoleRequestAltDtoAdapter = (source?: CreateRoleRequestAlt | null): ApiCreateRoleRequestAltDto => {
  return {
    Description: source?.description,
    Name: source?.name,
    PermissionGroups: source?.permissionGroups?.map((item) => apiRolePermissionGroupDtoAdapter(item)),
  };
}

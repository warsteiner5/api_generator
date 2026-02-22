import { RolePermission } from '../../models/role-permission.interface';
import { ApiRolePermissionDto } from '../../../swagger/models/api-role-permission-dto';

export const apiRolePermissionDtoAdapter = (source?: RolePermission | null): ApiRolePermissionDto => {
  return {
    Description: source?.description,
    Id: source?.id,
    IsChecked: source?.isChecked,
    Name: source?.name,
  };
}

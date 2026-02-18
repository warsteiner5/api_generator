import { Permission } from '../../models/permission.interface';
import { ApiPermissionDto } from '../../../swagger/models/api-permission-dto';

export function adaptApiPermissionDto(source?: Permission | null): ApiPermissionDto {
  return {
    Id: source?.id,
    Name: source?.name,
    PermissionGroupId: source?.permissionGroupId,
  };
}

import { Permission } from '../../models/permission.interface';
import { ApiPermissionDto } from '../../../swagger/models/api-permission-dto';

export const apiPermissionDtoAdapter = (source?: Permission | null): ApiPermissionDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    PermissionGroupId: source?.permissionGroupId,
  };
}

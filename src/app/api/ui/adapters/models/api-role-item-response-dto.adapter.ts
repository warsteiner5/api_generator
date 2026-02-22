import { RoleItemResponse } from '../../models/role-item-response.interface';
import { ApiRoleItemResponseDto } from '../../../swagger/models/api-role-item-response-dto';

export const apiRoleItemResponseDtoAdapter = (source?: RoleItemResponse | null): ApiRoleItemResponseDto => {
  return {
    CanChangeActivity: source?.canChangeActivity,
    CanDelete: source?.canDelete,
    CanEdit: source?.canEdit,
    Description: source?.description,
    Id: source?.id,
    IsActive: source?.isActive,
    Name: source?.name,
    TypeName: source?.typeName,
  };
}

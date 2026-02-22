import { ApiRoleItemResponseDto } from '../../../swagger/models/api-role-item-response-dto';
import { RoleItemResponse } from '../../models/role-item-response.interface';

export const roleItemResponseAdapter = (source?: ApiRoleItemResponseDto | null): RoleItemResponse => {
  return {
    canChangeActivity: source?.CanChangeActivity,
    canDelete: source?.CanDelete,
    canEdit: source?.CanEdit,
    description: source?.Description,
    id: source?.Id,
    isActive: source?.IsActive,
    name: source?.Name,
    typeName: source?.TypeName,
  };
}

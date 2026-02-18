import { ApiRoleItemResponseDto } from '../../../swagger/models/api-role-item-response-dto';
import { RoleItemResponse } from '../../models/role-item-response.interface';

export function adaptRoleItemResponseToUI(source?: ApiRoleItemResponseDto | null): RoleItemResponse {
  return {
    canChangeActivity: source?.CanChangeActivity ?? false,
    canDelete: source?.CanDelete ?? false,
    canEdit: source?.CanEdit ?? false,
    description: source?.Description ?? '',
    id: source?.Id ?? 0,
    isActive: source?.IsActive ?? false,
    name: source?.Name ?? '',
    typeName: source?.TypeName ?? '',
  };
}

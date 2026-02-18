import { LogUserActionMessage } from '../../models/log-user-action-message.interface';
import { ApiLogUserActionMessageDto } from '../../../swagger/models/api-log-user-action-message-dto';

export function adaptApiLogUserActionMessageDto(source?: LogUserActionMessage | null): ApiLogUserActionMessageDto {
  return {
    EntityId: source?.entityId,
    IsManager: source?.isManager,
    OrganizationId: source?.organizationId,
    TenantId: source?.tenantId,
    Url: source?.url,
    UserActionDescriptionId: source?.userActionDescriptionId,
    UserGuid: source?.userGuid,
    UserId: source?.userId,
  };
}

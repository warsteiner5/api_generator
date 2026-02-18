import { ApiLogUserActionMessageDto } from '../../../swagger/models/api-log-user-action-message-dto';
import { LogUserActionMessage } from '../../models/log-user-action-message.interface';

export function adaptLogUserActionMessageToUI(source?: ApiLogUserActionMessageDto | null): LogUserActionMessage {
  return {
    entityId: source?.EntityId ?? 0,
    isManager: source?.IsManager ?? false,
    organizationId: source?.OrganizationId ?? 0,
    tenantId: source?.TenantId ?? 0,
    url: source?.Url ?? '',
    userActionDescriptionId: source?.UserActionDescriptionId ?? 0,
    userGuid: source?.UserGuid ?? '',
    userId: source?.UserId ?? 0,
  };
}

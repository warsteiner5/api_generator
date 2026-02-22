import { ApiLogUserActionMessageDto } from '../../../swagger/models/api-log-user-action-message-dto';
import { LogUserActionMessage } from '../../models/log-user-action-message.interface';

export const logUserActionMessageAdapter = (source?: ApiLogUserActionMessageDto | null): LogUserActionMessage => {
  return {
    entityId: source?.EntityId,
    isManager: source?.IsManager,
    organizationId: source?.OrganizationId,
    tenantId: source?.TenantId,
    url: source?.Url,
    userActionDescriptionId: source?.UserActionDescriptionId,
    userGuid: source?.UserGuid,
    userId: source?.UserId,
  };
}

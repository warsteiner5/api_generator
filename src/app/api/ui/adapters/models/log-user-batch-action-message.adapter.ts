import { ApiLogUserBatchActionMessageDto } from '../../../swagger/models/api-log-user-batch-action-message-dto';
import { LogUserBatchActionMessage } from '../../models/log-user-batch-action-message.interface';
import { shortFilterAdapter } from './short-filter.adapter';

export const logUserBatchActionMessageAdapter = (source?: ApiLogUserBatchActionMessageDto | null): LogUserBatchActionMessage => {
  return {
    affectedRecordsCount: source?.AffectedRecordsCount,
    entityId: source?.EntityId,
    filter: source?.Filter === null ? undefined : shortFilterAdapter(source?.Filter),
    isManager: source?.IsManager,
    organizationId: source?.OrganizationId,
    tenantId: source?.TenantId,
    url: source?.Url,
    userActionDescriptionId: source?.UserActionDescriptionId,
    userGuid: source?.UserGuid,
    userId: source?.UserId,
  };
}

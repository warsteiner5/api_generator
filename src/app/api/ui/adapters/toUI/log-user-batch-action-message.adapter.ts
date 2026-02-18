import { ApiLogUserBatchActionMessageDto } from '../../../swagger/models/api-log-user-batch-action-message-dto';
import { LogUserBatchActionMessage } from '../../models/log-user-batch-action-message.interface';
import { adaptShortFilterToUI } from './short-filter.adapter';

export function adaptLogUserBatchActionMessageToUI(source?: ApiLogUserBatchActionMessageDto | null): LogUserBatchActionMessage {
  return {
    affectedRecordsCount: source?.AffectedRecordsCount ?? 0,
    entityId: source?.EntityId ?? 0,
    filter: adaptShortFilterToUI(source?.Filter),
    isManager: source?.IsManager ?? false,
    organizationId: source?.OrganizationId ?? 0,
    tenantId: source?.TenantId ?? 0,
    url: source?.Url ?? '',
    userActionDescriptionId: source?.UserActionDescriptionId ?? 0,
    userGuid: source?.UserGuid ?? '',
    userId: source?.UserId ?? 0,
  };
}

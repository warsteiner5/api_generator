import { LogUserBatchActionMessage } from '../../models/log-user-batch-action-message.interface';
import { ApiLogUserBatchActionMessageDto } from '../../../swagger/models/api-log-user-batch-action-message-dto';
import { apiShortFilterDtoAdapter } from './api-short-filter-dto.adapter';

export const apiLogUserBatchActionMessageDtoAdapter = (source?: LogUserBatchActionMessage | null): ApiLogUserBatchActionMessageDto => {
  return {
    AffectedRecordsCount: source?.affectedRecordsCount,
    EntityId: source?.entityId,
    Filter: source?.filter === null ? undefined : apiShortFilterDtoAdapter(source?.filter),
    IsManager: source?.isManager,
    OrganizationId: source?.organizationId,
    TenantId: source?.tenantId,
    Url: source?.url,
    UserActionDescriptionId: source?.userActionDescriptionId,
    UserGuid: source?.userGuid,
    UserId: source?.userId,
  };
}

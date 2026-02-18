import { LogUserBatchActionMessage } from '../../models/log-user-batch-action-message.interface';
import { ApiLogUserBatchActionMessageDto } from '../../../swagger/models/api-log-user-batch-action-message-dto';
import { adaptApiShortFilterDto } from './api-short-filter-dto.adapter';

export function adaptApiLogUserBatchActionMessageDto(source?: LogUserBatchActionMessage | null): ApiLogUserBatchActionMessageDto {
  return {
    AffectedRecordsCount: source?.affectedRecordsCount,
    EntityId: source?.entityId,
    Filter: adaptApiShortFilterDto(source?.filter),
    IsManager: source?.isManager,
    OrganizationId: source?.organizationId,
    TenantId: source?.tenantId,
    Url: source?.url,
    UserActionDescriptionId: source?.userActionDescriptionId,
    UserGuid: source?.userGuid,
    UserId: source?.userId,
  };
}

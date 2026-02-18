import { ApprovalRequestView } from '../../models/approval-request-view.interface';
import { ApiApprovalRequestViewDto } from '../../../swagger/models/api-approval-request-view-dto';
import { adaptApiApprovalRequestHistoryViewDto } from './api-approval-request-history-view-dto.adapter';
import { adaptApiApprovalRequestStateEnum } from './api-approval-request-state-enum.adapter';
import { adaptApiMarketEntityTypeEnum } from './api-market-entity-type-enum.adapter';

export function adaptApiApprovalRequestViewDto(source?: ApprovalRequestView | null): ApiApprovalRequestViewDto {
  return {
    EntityId: source?.entityId,
    EntityType: adaptApiMarketEntityTypeEnum(source?.entityType),
    History: (source?.history ?? []).map((item) => adaptApiApprovalRequestHistoryViewDto(item)),
    Id: source?.id,
    State: adaptApiApprovalRequestStateEnum(source?.state),
  };
}

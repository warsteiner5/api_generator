import { ApprovalRequestView } from '../../models/approval-request-view.interface';
import { ApiApprovalRequestViewDto } from '../../../swagger/models/api-approval-request-view-dto';
import { apiApprovalRequestHistoryViewDtoAdapter } from './api-approval-request-history-view-dto.adapter';
import { apiApprovalRequestStateEnumAdapter } from '../enums/api-approval-request-state-enum.adapter';
import { apiMarketEntityTypeEnumAdapter } from '../enums/api-market-entity-type-enum.adapter';

export const apiApprovalRequestViewDtoAdapter = (source?: ApprovalRequestView | null): ApiApprovalRequestViewDto => {
  return {
    EntityId: source?.entityId,
    EntityType: source?.entityType === null ? undefined : apiMarketEntityTypeEnumAdapter(source?.entityType),
    History: source?.history?.map((item) => apiApprovalRequestHistoryViewDtoAdapter(item)),
    Id: source?.id,
    State: source?.state === null ? undefined : apiApprovalRequestStateEnumAdapter(source?.state),
  };
}

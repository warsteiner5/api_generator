import { ApprovalRequestGetOrCreateRequestAlt } from '../../models/approval-request-get-or-create-request-alt.interface';
import { ApiApprovalRequestGetOrCreateRequestAltDto } from '../../../swagger/models/api-approval-request-get-or-create-request';
import { adaptApiMarketEntityTypeEnum } from './api-market-entity-type-enum.adapter';

export function adaptApiApprovalRequestGetOrCreateRequestAltDto(source?: ApprovalRequestGetOrCreateRequestAlt | null): ApiApprovalRequestGetOrCreateRequestAltDto {
  return {
    EntityId: source?.entityId,
    EntityType: adaptApiMarketEntityTypeEnum(source?.entityType),
  };
}

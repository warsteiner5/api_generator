import { ApiApprovalRequestCreateDto } from '../../../swagger/models/api-approval-request-create-dto';
import { ApprovalRequestCreate } from '../../models/approval-request-create.interface';
import { approvalRequestGetOrCreateRequestAltAdapter } from './approval-request-get-or-create-request-alt.adapter';

export const approvalRequestCreateAdapter = (source?: ApiApprovalRequestCreateDto | null): ApprovalRequestCreate => {
  return {
    ...approvalRequestGetOrCreateRequestAltAdapter(source as unknown as Parameters<typeof approvalRequestGetOrCreateRequestAltAdapter>[0]),
    tradeWorkGroups: source?.TradeWorkGroups,
  };
}

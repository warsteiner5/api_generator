import { ApprovalRequestCreate } from '../../models/approval-request-create.interface';
import { ApiApprovalRequestCreateDto } from '../../../swagger/models/api-approval-request-create-dto';
import { apiApprovalRequestGetOrCreateRequestAltDtoAdapter } from './api-approval-request-get-or-create-request.adapter';

export const apiApprovalRequestCreateDtoAdapter = (source?: ApprovalRequestCreate | null): ApiApprovalRequestCreateDto => {
  return {
    ...apiApprovalRequestGetOrCreateRequestAltDtoAdapter(source as unknown as Parameters<typeof apiApprovalRequestGetOrCreateRequestAltDtoAdapter>[0]),
    TradeWorkGroups: source?.tradeWorkGroups,
  };
}

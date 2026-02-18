import { ApproveOrderModelAlt } from '../../models/approve-order-model-alt.interface';
import { ApiApproveOrderModelAltDto } from '../../../swagger/models/api-approve-order-model';

export function adaptApiApproveOrderModelAltDto(source?: ApproveOrderModelAlt | null): ApiApproveOrderModelAltDto {
  return {
    AccountNumber: source?.accountNumber,
    Comment: source?.comment,
    OrderId: source?.orderId,
    PayCommissionReportGuid: source?.payCommissionReportGuid,
  };
}

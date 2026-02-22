import { ApiApproveOrderModelAltDto } from '../../../swagger/models/api-approve-order-model';
import { ApproveOrderModelAlt } from '../../models/approve-order-model-alt.interface';

export const approveOrderModelAltAdapter = (source?: ApiApproveOrderModelAltDto | null): ApproveOrderModelAlt => {
  return {
    accountNumber: source?.AccountNumber,
    comment: source?.Comment,
    orderId: source?.OrderId,
    payCommissionReportGuid: source?.PayCommissionReportGuid,
  };
}

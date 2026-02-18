import { ApiApproveOrderModelAltDto } from '../../../swagger/models/api-approve-order-model';
import { ApproveOrderModelAlt } from '../../models/approve-order-model-alt.interface';

export function adaptApproveOrderModelAltToUI(source?: ApiApproveOrderModelAltDto | null): ApproveOrderModelAlt {
  return {
    accountNumber: source?.AccountNumber ?? '',
    comment: source?.Comment ?? '',
    orderId: source?.OrderId ?? 0,
    payCommissionReportGuid: source?.PayCommissionReportGuid ?? '',
  };
}

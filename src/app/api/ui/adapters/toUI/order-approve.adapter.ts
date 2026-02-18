import { ApiOrderApproveDto } from '../../../swagger/models/api-order-approve-dto';
import { OrderApprove } from '../../models/order-approve.interface';
import { adaptPaymentMethodEnumToUI } from './payment-method-enum.adapter';

export function adaptOrderApproveToUI(source?: ApiOrderApproveDto | null): OrderApprove {
  return {
    accountNumber: source?.AccountNumber ?? '',
    agreementId: source?.AgreementId ?? 0,
    commissionMethod: adaptPaymentMethodEnumToUI(source?.CommissionMethod),
    emailForReceipt: source?.EmailForReceipt ?? '',
    orderId: source?.OrderId ?? 0,
    shipmentPoint: source?.ShipmentPoint ?? '',
  };
}

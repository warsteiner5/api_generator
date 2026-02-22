import { ApiOrderApproveDto } from '../../../swagger/models/api-order-approve-dto';
import { OrderApprove } from '../../models/order-approve.interface';
import { paymentMethodEnumAdapter } from '../enums/payment-method-enum.adapter';

export const orderApproveAdapter = (source?: ApiOrderApproveDto | null): OrderApprove => {
  return {
    accountNumber: source?.AccountNumber,
    agreementId: source?.AgreementId,
    commissionMethod: source?.CommissionMethod === null ? undefined : paymentMethodEnumAdapter(source?.CommissionMethod),
    emailForReceipt: source?.EmailForReceipt,
    orderId: source?.OrderId,
    shipmentPoint: source?.ShipmentPoint,
  };
}

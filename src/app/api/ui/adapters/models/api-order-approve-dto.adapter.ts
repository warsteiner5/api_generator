import { OrderApprove } from '../../models/order-approve.interface';
import { ApiOrderApproveDto } from '../../../swagger/models/api-order-approve-dto';
import { apiPaymentMethodEnumAdapter } from '../enums/api-payment-method-enum.adapter';

export const apiOrderApproveDtoAdapter = (source?: OrderApprove | null): ApiOrderApproveDto => {
  return {
    AccountNumber: source?.accountNumber,
    AgreementId: source?.agreementId,
    CommissionMethod: source?.commissionMethod === null ? undefined : apiPaymentMethodEnumAdapter(source?.commissionMethod),
    EmailForReceipt: source?.emailForReceipt,
    OrderId: source?.orderId,
    ShipmentPoint: source?.shipmentPoint,
  };
}

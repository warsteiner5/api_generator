import { OrderApprove } from '../../models/order-approve.interface';
import { ApiOrderApproveDto } from '../../../swagger/models/api-order-approve-dto';
import { adaptApiPaymentMethodEnum } from './api-payment-method-enum.adapter';

export function adaptApiOrderApproveDto(source?: OrderApprove | null): ApiOrderApproveDto {
  return {
    AccountNumber: source?.accountNumber,
    AgreementId: source?.agreementId,
    CommissionMethod: adaptApiPaymentMethodEnum(source?.commissionMethod),
    EmailForReceipt: source?.emailForReceipt,
    OrderId: source?.orderId,
    ShipmentPoint: source?.shipmentPoint,
  };
}

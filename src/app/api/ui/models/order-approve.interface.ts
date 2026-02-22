import { PaymentMethodEnum } from '../enums/payment-method.enum';

// @ts-ignore
export interface OrderApprove {
  accountNumber: string;
  agreementId: number;
  commissionMethod: PaymentMethodEnum;
  emailForReceipt: string;
  orderId: number;
  shipmentPoint: string;
}

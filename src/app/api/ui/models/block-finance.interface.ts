import { PaymentMethodEnum } from '../enums/payment-method.enum';

// @ts-ignore
export interface BlockFinance {
  accountNumber: string;
  applicationId: number;
  emailForReceipt: string;
  paymentMethod: PaymentMethodEnum;
}

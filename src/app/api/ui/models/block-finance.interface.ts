import { PaymentMethodEnum } from '../enums/payment-method.enum';

export interface BlockFinance {
  accountNumber: string;
  applicationId: number;
  emailForReceipt: string;
  paymentMethod: PaymentMethodEnum;
}

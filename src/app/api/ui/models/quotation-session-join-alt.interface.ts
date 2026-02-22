import { PaymentMethodEnum } from '../enums/payment-method.enum';

// @ts-ignore
export interface QuotationSessionJoinAlt {
  agreementDetachedSignature: string;
  agreementFileGuid: string;
  emailForReceipt: string;
  lotId: number;
  paymentMethod: PaymentMethodEnum;
}

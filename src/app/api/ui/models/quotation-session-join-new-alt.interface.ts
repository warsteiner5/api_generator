import { PaymentMethodEnum } from '../enums/payment-method.enum';

// @ts-ignore
export interface QuotationSessionJoinNewAlt {
  agreementDetachedSignature: string;
  agreementFileId: string;
  emailForReceipt: string;
  paymentMethod: PaymentMethodEnum;
  tradeGuid: string;
}

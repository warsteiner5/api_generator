import { PaymentMethodEnum } from '../enums/payment-method.enum';

export interface QuotationSessionJoinNewAlt {
  agreementDetachedSignature: string;
  agreementFileId: string;
  emailForReceipt: string;
  paymentMethod: PaymentMethodEnum;
  tradeGuid: string;
}

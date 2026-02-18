/* tslint:disable */
/* eslint-disable */
import { ApiPaymentMethodEnum } from '../models/api-payment-method-enum';
export interface ApiQuotationSessionJoinNewAltDto {
  AgreementDetachedSignature?: string | null;
  AgreementFileId?: string;
  EmailForReceipt?: string | null;
  PaymentMethod?: ApiPaymentMethodEnum;
  TradeGuid?: string;
}

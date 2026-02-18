/* tslint:disable */
/* eslint-disable */
import { ApiPaymentMethodEnum } from '../models/api-payment-method-enum';
export interface ApiQuotationSessionJoinAltDto {
  AgreementDetachedSignature?: string | null;
  AgreementFileGuid?: string;
  EmailForReceipt?: string | null;
  LotId?: number;
  PaymentMethod?: ApiPaymentMethodEnum;
}

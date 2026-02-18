/* tslint:disable */
/* eslint-disable */
import { ApiPaymentMethodEnum } from '../models/api-payment-method-enum';
export interface ApiBlockFinanceDto {
  AccountNumber?: string | null;
  ApplicationId?: number;
  EmailForReceipt?: string | null;
  PaymentMethod?: ApiPaymentMethodEnum;
}

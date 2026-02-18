/* tslint:disable */
/* eslint-disable */
import { ApiPaymentMethodEnum } from '../models/api-payment-method-enum';
export interface ApiOrderApproveDto {
  AccountNumber?: string | null;
  AgreementId?: number;
  CommissionMethod?: ApiPaymentMethodEnum;
  EmailForReceipt?: string | null;
  OrderId?: number;
  ShipmentPoint?: string | null;
}

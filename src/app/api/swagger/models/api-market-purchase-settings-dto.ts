/* tslint:disable */
/* eslint-disable */
import { ApiM4DDealSignRequiredEnum } from '../models/api-m-4-d-deal-sign-required-enum';
export interface ApiMarketPurchaseSettingsDto {
  CanSendTradeToEIS?: boolean;
  HideProtocolForTradeWithSentToEis?: boolean;
  M4DDealSignRequired?: ApiM4DDealSignRequiredEnum;
}

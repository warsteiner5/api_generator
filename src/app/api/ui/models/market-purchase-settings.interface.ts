import { M4DDealSignRequiredEnum } from '../enums/m-4-d-deal-sign-required.enum';

// @ts-ignore
export interface MarketPurchaseSettings {
  canSendTradeToEIS: boolean;
  hideProtocolForTradeWithSentToEis: boolean;
  m4DDealSignRequired: M4DDealSignRequiredEnum;
}

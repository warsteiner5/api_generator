/* tslint:disable */
/* eslint-disable */
import { ApiMarketTradePersonAltDto } from '../models/api-market-trade-person';
export interface ApiDealSignerAltDto {
  CanCustomerSignDeal?: boolean;
  CanEditSigner?: boolean;
  ShowSigner?: boolean;
  SignerPerson?: ApiMarketTradePersonAltDto | null;
}

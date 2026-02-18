/* tslint:disable */
/* eslint-disable */
import { ApiPurchaseMethodTypeEnum } from '../models/api-purchase-method-type-enum';
import { ApiTradeLotDto } from '../models/api-trade-lot-dto';
import { ApiTradeStateEnum } from '../models/api-trade-state-enum';
export interface ApiTradeShortInfoDto {
  ConditionsOfPayment?: string | null;
  ExternalSourcePlatformNumber?: string | null;
  FillingApplicationEndDate?: string | null;
  Id?: number;
  Lots?: Array<ApiTradeLotDto> | null;
  NotificationNumber?: string | null;
  OrganizerId?: number;
  PublicationDate?: string | null;
  PurchaseMethod?: ApiPurchaseMethodTypeEnum;
  TradeDescription?: string | null;
  TradeState?: ApiTradeStateEnum;
}

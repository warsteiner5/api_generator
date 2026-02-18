/* tslint:disable */
/* eslint-disable */
import { ApiApplicationStateEnum2 } from '../models/api-application-state-enum-2';
import { ApiLotStateEnum } from '../models/api-lot-state-enum';
export interface ApiApplicationInfoAltDto {
  ApplicationSource?: string | null;
  CurrentTenantHost?: string | null;
  IncomingNumber?: number;
  PublishDate?: string | null;
  RevokeDate?: string | null;
  State?: ApiApplicationStateEnum2;
  StateName?: string | null;
  TenantHost?: string | null;
  TradeLotNumber?: number;
  TradeLotState?: ApiLotStateEnum;
  TradeName?: string | null;
  TradeNumber?: number;
  TradeStateName?: string | null;
}

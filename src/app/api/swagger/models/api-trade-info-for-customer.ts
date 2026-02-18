/* tslint:disable */
/* eslint-disable */
import { ApiLotStateEnum } from '../models/api-lot-state-enum';
export interface ApiTradeInfoForCustomerAltDto {
  ApplicationsCount?: number;
  CurrentCustomerOrganizationId?: number;
  CustomerFullName?: string | null;
  CustomerOrganizationId?: number;
  DownloadMetric?: number | null;
  ExternalSystemId?: number | null;
  FillingApplicationEndDate?: string | null;
  HasApplications?: boolean;
  HasDealSignedOutsideEShop?: boolean;
  Id?: number;
  InitialPrice?: number | null;
  IsHidePriceAndQuantity?: boolean;
  IsImmediate?: boolean;
  IsInitialPriceDefined?: boolean;
  IsUnitBidding?: boolean;
  LastModificationDate?: string | null;
  PublicApplications?: ({
[key: string]: number;
}) | null;
  PublicationDate?: string | null;
  TradeLotStateName?: string | null;
  TradeName?: string | null;
  TradeNumber?: string | null;
  TradeState?: ApiLotStateEnum;
  ViewMetric?: number | null;
  ZmoFinanceSourceString?: string | null;
  ZmoFzTypeString?: string | null;
}

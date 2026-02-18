/* tslint:disable */
/* eslint-disable */
import { ApiLotStateEnum } from '../models/api-lot-state-enum';
import { ApiTradeStateEnum } from '../models/api-trade-state-enum';
export interface ApiTradeInfoForAnonymousAltDto {
  ApplicationsCount?: number;
  CustomerFullName?: string | null;
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
  LotNumber?: number;
  OrganizerName?: string | null;
  ParticipantHasApplicationsOnTrade?: boolean;
  PublicApplications?: ({
[key: string]: number;
}) | null;
  PublicationDate?: string | null;
  TradeLotState?: ApiLotStateEnum;
  TradeName?: string | null;
  TradeNumber?: string | null;
  TradeState?: ApiTradeStateEnum;
  TradeStateName?: string | null;
  ZmoFzTypeString?: string | null;
}

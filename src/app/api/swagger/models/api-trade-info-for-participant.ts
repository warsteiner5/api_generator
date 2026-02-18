/* tslint:disable */
/* eslint-disable */
import { ApiLotStateEnum } from '../models/api-lot-state-enum';
import { ApiTradeStateEnum } from '../models/api-trade-state-enum';
export interface ApiTradeInfoForParticipantAltDto {
  ApplicationsCount?: number;
  CustomerFullName?: string | null;
  CustomerId?: number;
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
  RedirectUrl?: string | null;
  TradeLotState?: ApiLotStateEnum;
  TradeName?: string | null;
  TradeNumber?: string | null;
  TradeState?: ApiTradeStateEnum;
  TradeStateName?: string | null;
  ZmoFzTypeString?: string | null;
}

import { LotStateEnum } from '../enums/lot-state.enum';
import { TradeStateEnum } from '../enums/trade-state.enum';

// @ts-ignore
export interface TradeInfoForAnonymousAlt {
  applicationsCount: number;
  customerFullName: string;
  fillingApplicationEndDate: string;
  hasApplications: boolean;
  hasDealSignedOutsideEShop: boolean;
  id: number;
  initialPrice: number;
  isHidePriceAndQuantity: boolean;
  isImmediate: boolean;
  isInitialPriceDefined: boolean;
  isUnitBidding: boolean;
  lastModificationDate: string;
  lotNumber: number;
  organizerName: string;
  participantHasApplicationsOnTrade: boolean;
  publicApplications: { [key: string]: number; };
  publicationDate: string;
  tradeLotState: LotStateEnum;
  tradeName: string;
  tradeNumber: string;
  tradeState: TradeStateEnum;
  tradeStateName: string;
  zmoFzTypeString: string;
}

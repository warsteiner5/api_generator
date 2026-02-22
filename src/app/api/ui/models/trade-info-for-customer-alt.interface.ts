import { LotStateEnum } from '../enums/lot-state.enum';

// @ts-ignore
export interface TradeInfoForCustomerAlt {
  applicationsCount: number;
  currentCustomerOrganizationId: number;
  customerFullName: string;
  customerOrganizationId: number;
  downloadMetric: number;
  externalSystemId: number;
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
  publicApplications: { [key: string]: number; };
  publicationDate: string;
  tradeLotStateName: string;
  tradeName: string;
  tradeNumber: string;
  tradeState: LotStateEnum;
  viewMetric: number;
  zmoFinanceSourceString: string;
  zmoFzTypeString: string;
}

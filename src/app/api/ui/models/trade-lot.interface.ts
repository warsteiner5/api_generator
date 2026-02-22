import { ApplicationGuaranteeTypeEnum } from '../enums/application-guarantee-type.enum';
import { AuctionInfo } from './auction-info.interface';
import { AvailableVatTypeEnum } from '../enums/available-vat-type.enum';
import { DealDirectionFlowEnum } from '../enums/deal-direction-flow.enum';
import { LotItem } from './lot-item.interface';
import { LotStateEnum } from '../enums/lot-state.enum';
import { PurchaseCategoryAltEnum } from '../enums/purchase-category-alt.enum';
import { Trade } from './trade.interface';
import { TradeBiddingTypeEnum } from '../enums/trade-bidding-type.enum';
import { TradeLotCustomer } from './trade-lot-customer.interface';
import { ZmoFinanceSourceEnum } from '../enums/zmo-finance-source.enum';

// @ts-ignore
export interface TradeLot {
  applicationAmountExtra: string;
  applicationGuaranteeType: ApplicationGuaranteeTypeEnum;
  auction: AuctionInfo;
  currencyCode: string;
  customers: TradeLotCustomer[];
  dealDirectionFlow: DealDirectionFlowEnum;
  deliveryDate: string;
  id: number;
  isImmediate: boolean;
  isItemApplicationCompare: boolean;
  isLotPriceWithVat: boolean;
  isMultiParticipantsContract: boolean;
  isPurchaseIgnored: boolean;
  isRetradingEnabled: boolean;
  lotItems: LotItem[];
  lotPrice: number;
  lotState: LotStateEnum;
  orderNumber: number;
  priceUndefined: boolean;
  priceUndefinedComment: string;
  productRequirements: string;
  purchaseCategory: PurchaseCategoryAltEnum;
  rateVat: AvailableVatTypeEnum;
  subject: string;
  sumVat: number;
  trade: Trade;
  tradeBiddingType: TradeBiddingTypeEnum;
  tradeId: number;
  uniqueId: string;
  zmoFinanceSource: ZmoFinanceSourceEnum;
  zmoFzType: number;
}

/* tslint:disable */
/* eslint-disable */
import { ApiApplicationGuaranteeTypeEnum } from '../models/api-application-guarantee-type-enum';
import { ApiAuctionInfoDto } from '../models/api-auction-info-dto';
import { ApiAvailableVatTypeEnum } from '../models/api-available-vat-type-enum';
import { ApiDealDirectionFlowEnum } from '../models/api-deal-direction-flow-enum';
import { ApiLotItemDto } from '../models/api-lot-item-dto';
import { ApiLotStateEnum } from '../models/api-lot-state-enum';
import { ApiPurchaseCategoryAltEnum } from '../models/api-purchase-category';
import { ApiTradeBiddingTypeEnum } from '../models/api-trade-bidding-type-enum';
import { ApiTradeDto } from '../models/api-trade-dto';
import { ApiTradeLotCustomerDto } from '../models/api-trade-lot-customer-dto';
import { ApiZmoFinanceSourceEnum } from '../models/api-zmo-finance-source-enum';
export interface ApiTradeLotDto {
  ApplicationAmountExtra?: string | null;
  ApplicationGuaranteeType?: ApiApplicationGuaranteeTypeEnum;
  Auction?: ApiAuctionInfoDto | null;
  CurrencyCode?: string | null;
  Customers?: Array<ApiTradeLotCustomerDto> | null;
  DealDirectionFlow?: ApiDealDirectionFlowEnum;
  DeliveryDate?: string | null;
  Id?: number;
  IsImmediate?: boolean;
  IsItemApplicationCompare?: boolean;
  IsLotPriceWithVat?: boolean;
  IsMultiParticipantsContract?: boolean;
  IsPurchaseIgnored?: boolean | null;
  IsRetradingEnabled?: boolean;
  LotItems?: Array<ApiLotItemDto> | null;
  LotPrice?: number | null;
  LotState?: ApiLotStateEnum;
  OrderNumber?: number;
  PriceUndefined?: boolean;
  PriceUndefinedComment?: string | null;
  ProductRequirements?: string | null;
  PurchaseCategory?: ApiPurchaseCategoryAltEnum | null;
  RateVat?: ApiAvailableVatTypeEnum;
  Subject?: string | null;
  SumVat?: number | null;
  Trade?: ApiTradeDto | null;
  TradeBiddingType?: ApiTradeBiddingTypeEnum | null;
  TradeId?: number;
  UniqueId?: string;
  ZmoFinanceSource?: ApiZmoFinanceSourceEnum | null;
  ZmoFzType?: number | null;
}

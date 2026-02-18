import { TradeLot } from '../../models/trade-lot.interface';
import { ApiTradeLotDto } from '../../../swagger/models/api-trade-lot-dto';
import { adaptApiApplicationGuaranteeTypeEnum } from './api-application-guarantee-type-enum.adapter';
import { adaptApiAuctionInfoDto } from './api-auction-info-dto.adapter';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';
import { adaptApiDealDirectionFlowEnum } from './api-deal-direction-flow-enum.adapter';
import { adaptApiLotItemDto } from './api-lot-item-dto.adapter';
import { adaptApiLotStateEnum } from './api-lot-state-enum.adapter';
import { adaptApiPurchaseCategoryAltEnum } from './api-purchase-category.adapter';
import { adaptApiTradeBiddingTypeEnum } from './api-trade-bidding-type-enum.adapter';
import { adaptApiTradeDto } from './api-trade-dto.adapter';
import { adaptApiTradeLotCustomerDto } from './api-trade-lot-customer-dto.adapter';
import { adaptApiZmoFinanceSourceEnum } from './api-zmo-finance-source-enum.adapter';

export function adaptApiTradeLotDto(source?: TradeLot | null): ApiTradeLotDto {
  return {
    ApplicationAmountExtra: source?.applicationAmountExtra,
    ApplicationGuaranteeType: adaptApiApplicationGuaranteeTypeEnum(source?.applicationGuaranteeType),
    Auction: adaptApiAuctionInfoDto(source?.auction),
    CurrencyCode: source?.currencyCode,
    Customers: (source?.customers ?? []).map((item) => adaptApiTradeLotCustomerDto(item)),
    DealDirectionFlow: adaptApiDealDirectionFlowEnum(source?.dealDirectionFlow),
    DeliveryDate: source?.deliveryDate,
    Id: source?.id,
    IsImmediate: source?.isImmediate,
    IsItemApplicationCompare: source?.isItemApplicationCompare,
    IsLotPriceWithVat: source?.isLotPriceWithVat,
    IsMultiParticipantsContract: source?.isMultiParticipantsContract,
    IsPurchaseIgnored: source?.isPurchaseIgnored,
    IsRetradingEnabled: source?.isRetradingEnabled,
    LotItems: (source?.lotItems ?? []).map((item) => adaptApiLotItemDto(item)),
    LotPrice: source?.lotPrice,
    LotState: adaptApiLotStateEnum(source?.lotState),
    OrderNumber: source?.orderNumber,
    PriceUndefined: source?.priceUndefined,
    PriceUndefinedComment: source?.priceUndefinedComment,
    ProductRequirements: source?.productRequirements,
    PurchaseCategory: adaptApiPurchaseCategoryAltEnum(source?.purchaseCategory),
    RateVat: adaptApiAvailableVatTypeEnum(source?.rateVat),
    Subject: source?.subject,
    SumVat: source?.sumVat,
    Trade: adaptApiTradeDto(source?.trade),
    TradeBiddingType: adaptApiTradeBiddingTypeEnum(source?.tradeBiddingType),
    TradeId: source?.tradeId,
    UniqueId: source?.uniqueId,
    ZmoFinanceSource: adaptApiZmoFinanceSourceEnum(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}

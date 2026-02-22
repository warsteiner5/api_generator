import { TradeLot } from '../../models/trade-lot.interface';
import { ApiTradeLotDto } from '../../../swagger/models/api-trade-lot-dto';
import { apiApplicationGuaranteeTypeEnumAdapter } from '../enums/api-application-guarantee-type-enum.adapter';
import { apiAuctionInfoDtoAdapter } from './api-auction-info-dto.adapter';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';
import { apiDealDirectionFlowEnumAdapter } from '../enums/api-deal-direction-flow-enum.adapter';
import { apiLotItemDtoAdapter } from './api-lot-item-dto.adapter';
import { apiLotStateEnumAdapter } from '../enums/api-lot-state-enum.adapter';
import { apiPurchaseCategoryAltEnumAdapter } from '../enums/api-purchase-category.adapter';
import { apiTradeBiddingTypeEnumAdapter } from '../enums/api-trade-bidding-type-enum.adapter';
import { apiTradeDtoAdapter } from './api-trade-dto.adapter';
import { apiTradeLotCustomerDtoAdapter } from './api-trade-lot-customer-dto.adapter';
import { apiZmoFinanceSourceEnumAdapter } from '../enums/api-zmo-finance-source-enum.adapter';

export const apiTradeLotDtoAdapter = (source?: TradeLot | null): ApiTradeLotDto => {
  return {
    ApplicationAmountExtra: source?.applicationAmountExtra,
    ApplicationGuaranteeType: source?.applicationGuaranteeType === null ? undefined : apiApplicationGuaranteeTypeEnumAdapter(source?.applicationGuaranteeType),
    Auction: source?.auction === null ? undefined : apiAuctionInfoDtoAdapter(source?.auction),
    CurrencyCode: source?.currencyCode,
    Customers: source?.customers?.map((item) => apiTradeLotCustomerDtoAdapter(item)),
    DealDirectionFlow: source?.dealDirectionFlow === null ? undefined : apiDealDirectionFlowEnumAdapter(source?.dealDirectionFlow),
    DeliveryDate: source?.deliveryDate,
    Id: source?.id,
    IsImmediate: source?.isImmediate,
    IsItemApplicationCompare: source?.isItemApplicationCompare,
    IsLotPriceWithVat: source?.isLotPriceWithVat,
    IsMultiParticipantsContract: source?.isMultiParticipantsContract,
    IsPurchaseIgnored: source?.isPurchaseIgnored,
    IsRetradingEnabled: source?.isRetradingEnabled,
    LotItems: source?.lotItems?.map((item) => apiLotItemDtoAdapter(item)),
    LotPrice: source?.lotPrice,
    LotState: source?.lotState === null ? undefined : apiLotStateEnumAdapter(source?.lotState),
    OrderNumber: source?.orderNumber,
    PriceUndefined: source?.priceUndefined,
    PriceUndefinedComment: source?.priceUndefinedComment,
    ProductRequirements: source?.productRequirements,
    PurchaseCategory: source?.purchaseCategory === null ? undefined : apiPurchaseCategoryAltEnumAdapter(source?.purchaseCategory),
    RateVat: source?.rateVat === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.rateVat),
    Subject: source?.subject,
    SumVat: source?.sumVat,
    Trade: source?.trade === null ? undefined : apiTradeDtoAdapter(source?.trade),
    TradeBiddingType: source?.tradeBiddingType === null ? undefined : apiTradeBiddingTypeEnumAdapter(source?.tradeBiddingType),
    TradeId: source?.tradeId,
    UniqueId: source?.uniqueId,
    ZmoFinanceSource: source?.zmoFinanceSource === null ? undefined : apiZmoFinanceSourceEnumAdapter(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}

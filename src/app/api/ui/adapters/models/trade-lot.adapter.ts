import { ApiTradeLotDto } from '../../../swagger/models/api-trade-lot-dto';
import { TradeLot } from '../../models/trade-lot.interface';
import { applicationGuaranteeTypeEnumAdapter } from '../enums/application-guarantee-type-enum.adapter';
import { auctionInfoAdapter } from './auction-info.adapter';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';
import { dealDirectionFlowEnumAdapter } from '../enums/deal-direction-flow-enum.adapter';
import { lotItemAdapter } from './lot-item.adapter';
import { lotStateEnumAdapter } from '../enums/lot-state-enum.adapter';
import { purchaseCategoryAltEnumAdapter } from '../enums/purchase-category-alt-enum.adapter';
import { tradeAdapter } from './trade.adapter';
import { tradeBiddingTypeEnumAdapter } from '../enums/trade-bidding-type-enum.adapter';
import { tradeLotCustomerAdapter } from './trade-lot-customer.adapter';
import { zmoFinanceSourceEnumAdapter } from '../enums/zmo-finance-source-enum.adapter';

export const tradeLotAdapter = (source?: ApiTradeLotDto | null): TradeLot => {
  return {
    applicationAmountExtra: source?.ApplicationAmountExtra,
    applicationGuaranteeType: source?.ApplicationGuaranteeType === null ? undefined : applicationGuaranteeTypeEnumAdapter(source?.ApplicationGuaranteeType),
    auction: source?.Auction === null ? undefined : auctionInfoAdapter(source?.Auction),
    currencyCode: source?.CurrencyCode,
    customers: source?.Customers?.map((item) => tradeLotCustomerAdapter(item)),
    dealDirectionFlow: source?.DealDirectionFlow === null ? undefined : dealDirectionFlowEnumAdapter(source?.DealDirectionFlow),
    deliveryDate: source?.DeliveryDate,
    id: source?.Id,
    isImmediate: source?.IsImmediate,
    isItemApplicationCompare: source?.IsItemApplicationCompare,
    isLotPriceWithVat: source?.IsLotPriceWithVat,
    isMultiParticipantsContract: source?.IsMultiParticipantsContract,
    isPurchaseIgnored: source?.IsPurchaseIgnored,
    isRetradingEnabled: source?.IsRetradingEnabled,
    lotItems: source?.LotItems?.map((item) => lotItemAdapter(item)),
    lotPrice: source?.LotPrice,
    lotState: source?.LotState === null ? undefined : lotStateEnumAdapter(source?.LotState),
    orderNumber: source?.OrderNumber,
    priceUndefined: source?.PriceUndefined,
    priceUndefinedComment: source?.PriceUndefinedComment,
    productRequirements: source?.ProductRequirements,
    purchaseCategory: source?.PurchaseCategory === null ? undefined : purchaseCategoryAltEnumAdapter(source?.PurchaseCategory),
    rateVat: source?.RateVat === null ? undefined : availableVatTypeEnumAdapter(source?.RateVat),
    subject: source?.Subject,
    sumVat: source?.SumVat,
    trade: source?.Trade === null ? undefined : tradeAdapter(source?.Trade),
    tradeBiddingType: source?.TradeBiddingType === null ? undefined : tradeBiddingTypeEnumAdapter(source?.TradeBiddingType),
    tradeId: source?.TradeId,
    uniqueId: source?.UniqueId,
    zmoFinanceSource: source?.ZmoFinanceSource === null ? undefined : zmoFinanceSourceEnumAdapter(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType,
  };
}

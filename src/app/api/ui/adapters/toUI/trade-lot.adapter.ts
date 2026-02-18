import { ApiTradeLotDto } from '../../../swagger/models/api-trade-lot-dto';
import { TradeLot } from '../../models/trade-lot.interface';
import { adaptApplicationGuaranteeTypeEnumToUI } from './application-guarantee-type-enum.adapter';
import { adaptAuctionInfoToUI } from './auction-info.adapter';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';
import { adaptDealDirectionFlowEnumToUI } from './deal-direction-flow-enum.adapter';
import { adaptLotItemToUI } from './lot-item.adapter';
import { adaptLotStateEnumToUI } from './lot-state-enum.adapter';
import { adaptPurchaseCategoryAltEnumToUI } from './purchase-category-alt-enum.adapter';
import { adaptTradeBiddingTypeEnumToUI } from './trade-bidding-type-enum.adapter';
import { adaptTradeLotCustomerToUI } from './trade-lot-customer.adapter';
import { adaptTradeToUI } from './trade.adapter';
import { adaptZmoFinanceSourceEnumToUI } from './zmo-finance-source-enum.adapter';

export function adaptTradeLotToUI(source?: ApiTradeLotDto | null): TradeLot {
  return {
    applicationAmountExtra: source?.ApplicationAmountExtra ?? '',
    applicationGuaranteeType: adaptApplicationGuaranteeTypeEnumToUI(source?.ApplicationGuaranteeType),
    auction: adaptAuctionInfoToUI(source?.Auction),
    currencyCode: source?.CurrencyCode ?? '',
    customers: (source?.Customers ?? []).map((item) => adaptTradeLotCustomerToUI(item)),
    dealDirectionFlow: adaptDealDirectionFlowEnumToUI(source?.DealDirectionFlow),
    deliveryDate: source?.DeliveryDate ?? '',
    id: source?.Id ?? 0,
    isImmediate: source?.IsImmediate ?? false,
    isItemApplicationCompare: source?.IsItemApplicationCompare ?? false,
    isLotPriceWithVat: source?.IsLotPriceWithVat ?? false,
    isMultiParticipantsContract: source?.IsMultiParticipantsContract ?? false,
    isPurchaseIgnored: source?.IsPurchaseIgnored ?? false,
    isRetradingEnabled: source?.IsRetradingEnabled ?? false,
    lotItems: (source?.LotItems ?? []).map((item) => adaptLotItemToUI(item)),
    lotPrice: source?.LotPrice ?? 0,
    lotState: adaptLotStateEnumToUI(source?.LotState),
    orderNumber: source?.OrderNumber ?? 0,
    priceUndefined: source?.PriceUndefined ?? false,
    priceUndefinedComment: source?.PriceUndefinedComment ?? '',
    productRequirements: source?.ProductRequirements ?? '',
    purchaseCategory: adaptPurchaseCategoryAltEnumToUI(source?.PurchaseCategory),
    rateVat: adaptAvailableVatTypeEnumToUI(source?.RateVat),
    subject: source?.Subject ?? '',
    sumVat: source?.SumVat ?? 0,
    trade: adaptTradeToUI(source?.Trade),
    tradeBiddingType: adaptTradeBiddingTypeEnumToUI(source?.TradeBiddingType),
    tradeId: source?.TradeId ?? 0,
    uniqueId: source?.UniqueId ?? '',
    zmoFinanceSource: adaptZmoFinanceSourceEnumToUI(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}

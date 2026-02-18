import { ApiMarketOrderAgreementHistoryDto } from '../../../swagger/models/api-market-order-agreement-history-dto';
import { MarketOrderAgreementHistory } from '../../models/market-order-agreement-history.interface';
import { adaptDealAgreementHistoryStateEnumToUI } from './deal-agreement-history-state-enum.adapter';
import { adaptDealAgreementHistoryTypeEnumToUI } from './deal-agreement-history-type-enum.adapter';
import { adaptDeliveryMethodAltEnumToUI } from './delivery-method-alt-enum.adapter';
import { adaptMarketOrderAdditionalServiceToUI } from './market-order-additional-service.adapter';
import { adaptMarketOrderChangeDetailToUI } from './market-order-change-detail.adapter';

export function adaptMarketOrderAgreementHistoryToUI(source?: ApiMarketOrderAgreementHistoryDto | null): MarketOrderAgreementHistory {
  return {
    additionalServices: (source?.AdditionalServices ?? []).map((item) => adaptMarketOrderAdditionalServiceToUI(item)),
    agreementState: adaptDealAgreementHistoryStateEnumToUI(source?.AgreementState),
    buyerOrgId: source?.BuyerOrgId ?? 0,
    comment: source?.Comment ?? '',
    dateTimeCreated: source?.DateTimeCreated ?? '',
    deliveryMethod: adaptDeliveryMethodAltEnumToUI(source?.DeliveryMethod),
    deliveryPlace: source?.DeliveryPlace ?? '',
    id: source?.Id ?? 0,
    isSelfDelivery: source?.IsSelfDelivery ?? false,
    isSellerDelivery: source?.IsSellerDelivery ?? false,
    isTransportCompanyDelivery: source?.IsTransportCompanyDelivery ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    orderChangeDetails: (source?.OrderChangeDetails ?? []).map((item) => adaptMarketOrderChangeDetailToUI(item)),
    orderId: source?.OrderId ?? 0,
    selfDeliveryPlace: source?.SelfDeliveryPlace ?? '',
    sellerDeliveryPrice: source?.SellerDeliveryPrice ?? 0,
    sellerOrgId: source?.SellerOrgId ?? 0,
    tradeId: source?.TradeId ?? 0,
    tradeLotId: source?.TradeLotId ?? 0,
    transportCompanyDeliveryPrice: source?.TransportCompanyDeliveryPrice ?? 0,
    type: adaptDealAgreementHistoryTypeEnumToUI(source?.Type),
  };
}

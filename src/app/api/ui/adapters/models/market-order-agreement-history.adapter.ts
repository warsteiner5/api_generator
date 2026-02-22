import { ApiMarketOrderAgreementHistoryDto } from '../../../swagger/models/api-market-order-agreement-history-dto';
import { MarketOrderAgreementHistory } from '../../models/market-order-agreement-history.interface';
import { dealAgreementHistoryStateEnumAdapter } from '../enums/deal-agreement-history-state-enum.adapter';
import { dealAgreementHistoryTypeEnumAdapter } from '../enums/deal-agreement-history-type-enum.adapter';
import { deliveryMethodAltEnumAdapter } from '../enums/delivery-method-alt-enum.adapter';
import { marketOrderAdditionalServiceAdapter } from './market-order-additional-service.adapter';
import { marketOrderChangeDetailAdapter } from './market-order-change-detail.adapter';

export const marketOrderAgreementHistoryAdapter = (source?: ApiMarketOrderAgreementHistoryDto | null): MarketOrderAgreementHistory => {
  return {
    additionalServices: source?.AdditionalServices?.map((item) => marketOrderAdditionalServiceAdapter(item)),
    agreementState: source?.AgreementState === null ? undefined : dealAgreementHistoryStateEnumAdapter(source?.AgreementState),
    buyerOrgId: source?.BuyerOrgId,
    comment: source?.Comment,
    dateTimeCreated: source?.DateTimeCreated,
    deliveryMethod: source?.DeliveryMethod === null ? undefined : deliveryMethodAltEnumAdapter(source?.DeliveryMethod),
    deliveryPlace: source?.DeliveryPlace,
    id: source?.Id,
    isSelfDelivery: source?.IsSelfDelivery,
    isSellerDelivery: source?.IsSellerDelivery,
    isTransportCompanyDelivery: source?.IsTransportCompanyDelivery,
    isUnitBidding: source?.IsUnitBidding,
    orderChangeDetails: source?.OrderChangeDetails?.map((item) => marketOrderChangeDetailAdapter(item)),
    orderId: source?.OrderId,
    selfDeliveryPlace: source?.SelfDeliveryPlace,
    sellerDeliveryPrice: source?.SellerDeliveryPrice,
    sellerOrgId: source?.SellerOrgId,
    tradeId: source?.TradeId,
    tradeLotId: source?.TradeLotId,
    transportCompanyDeliveryPrice: source?.TransportCompanyDeliveryPrice,
    type: source?.Type === null ? undefined : dealAgreementHistoryTypeEnumAdapter(source?.Type),
  };
}

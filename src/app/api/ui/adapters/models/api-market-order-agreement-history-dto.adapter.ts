import { MarketOrderAgreementHistory } from '../../models/market-order-agreement-history.interface';
import { ApiMarketOrderAgreementHistoryDto } from '../../../swagger/models/api-market-order-agreement-history-dto';
import { apiDealAgreementHistoryStateEnumAdapter } from '../enums/api-deal-agreement-history-state-enum.adapter';
import { apiDealAgreementHistoryTypeEnumAdapter } from '../enums/api-deal-agreement-history-type-enum.adapter';
import { apiDeliveryMethodAltEnumAdapter } from '../enums/api-delivery-method.adapter';
import { apiMarketOrderAdditionalServiceDtoAdapter } from './api-market-order-additional-service-dto.adapter';
import { apiMarketOrderChangeDetailDtoAdapter } from './api-market-order-change-detail-dto.adapter';

export const apiMarketOrderAgreementHistoryDtoAdapter = (source?: MarketOrderAgreementHistory | null): ApiMarketOrderAgreementHistoryDto => {
  return {
    AdditionalServices: source?.additionalServices?.map((item) => apiMarketOrderAdditionalServiceDtoAdapter(item)),
    AgreementState: source?.agreementState === null ? undefined : apiDealAgreementHistoryStateEnumAdapter(source?.agreementState),
    BuyerOrgId: source?.buyerOrgId,
    Comment: source?.comment,
    DateTimeCreated: source?.dateTimeCreated,
    DeliveryMethod: source?.deliveryMethod === null ? undefined : apiDeliveryMethodAltEnumAdapter(source?.deliveryMethod),
    DeliveryPlace: source?.deliveryPlace,
    Id: source?.id,
    IsSelfDelivery: source?.isSelfDelivery,
    IsSellerDelivery: source?.isSellerDelivery,
    IsTransportCompanyDelivery: source?.isTransportCompanyDelivery,
    IsUnitBidding: source?.isUnitBidding,
    OrderChangeDetails: source?.orderChangeDetails?.map((item) => apiMarketOrderChangeDetailDtoAdapter(item)),
    OrderId: source?.orderId,
    SelfDeliveryPlace: source?.selfDeliveryPlace,
    SellerDeliveryPrice: source?.sellerDeliveryPrice,
    SellerOrgId: source?.sellerOrgId,
    TradeId: source?.tradeId,
    TradeLotId: source?.tradeLotId,
    TransportCompanyDeliveryPrice: source?.transportCompanyDeliveryPrice,
    Type: source?.type === null ? undefined : apiDealAgreementHistoryTypeEnumAdapter(source?.type),
  };
}

import { MarketOrderAgreementHistory } from '../../models/market-order-agreement-history.interface';
import { ApiMarketOrderAgreementHistoryDto } from '../../../swagger/models/api-market-order-agreement-history-dto';
import { adaptApiDealAgreementHistoryStateEnum } from './api-deal-agreement-history-state-enum.adapter';
import { adaptApiDealAgreementHistoryTypeEnum } from './api-deal-agreement-history-type-enum.adapter';
import { adaptApiDeliveryMethodAltEnum } from './api-delivery-method.adapter';
import { adaptApiMarketOrderAdditionalServiceDto } from './api-market-order-additional-service-dto.adapter';
import { adaptApiMarketOrderChangeDetailDto } from './api-market-order-change-detail-dto.adapter';

export function adaptApiMarketOrderAgreementHistoryDto(source?: MarketOrderAgreementHistory | null): ApiMarketOrderAgreementHistoryDto {
  return {
    AdditionalServices: (source?.additionalServices ?? []).map((item) => adaptApiMarketOrderAdditionalServiceDto(item)),
    AgreementState: adaptApiDealAgreementHistoryStateEnum(source?.agreementState),
    BuyerOrgId: source?.buyerOrgId,
    Comment: source?.comment,
    DateTimeCreated: source?.dateTimeCreated,
    DeliveryMethod: adaptApiDeliveryMethodAltEnum(source?.deliveryMethod),
    DeliveryPlace: source?.deliveryPlace,
    Id: source?.id,
    IsSelfDelivery: source?.isSelfDelivery,
    IsSellerDelivery: source?.isSellerDelivery,
    IsTransportCompanyDelivery: source?.isTransportCompanyDelivery,
    IsUnitBidding: source?.isUnitBidding,
    OrderChangeDetails: (source?.orderChangeDetails ?? []).map((item) => adaptApiMarketOrderChangeDetailDto(item)),
    OrderId: source?.orderId,
    SelfDeliveryPlace: source?.selfDeliveryPlace,
    SellerDeliveryPrice: source?.sellerDeliveryPrice,
    SellerOrgId: source?.sellerOrgId,
    TradeId: source?.tradeId,
    TradeLotId: source?.tradeLotId,
    TransportCompanyDeliveryPrice: source?.transportCompanyDeliveryPrice,
    Type: adaptApiDealAgreementHistoryTypeEnum(source?.type),
  };
}

import { ApiOrderAgreementAltDto } from '../../../swagger/models/api-order-agreement';
import { OrderAgreementAlt } from '../../models/order-agreement-alt.interface';
import { adaptOrderAdditionalServiceAltToUI } from './order-additional-service-alt.adapter';
import { adaptOrderAgreementDetailAltToUI } from './order-agreement-detail-alt.adapter';

export function adaptOrderAgreementAltToUI(source?: ApiOrderAgreementAltDto | null): OrderAgreementAlt {
  return {
    chatId: source?.ChatId ?? 0,
    comment: source?.Comment ?? '',
    isSelfDelivery: source?.IsSelfDelivery ?? false,
    isSellerDelivery: source?.IsSellerDelivery ?? false,
    isTransportCompanyDelivery: source?.IsTransportCompanyDelivery ?? false,
    orderAdditionalServices: (source?.OrderAdditionalServices ?? []).map((item) => adaptOrderAdditionalServiceAltToUI(item)),
    orderAgreementDetails: (source?.OrderAgreementDetails ?? []).map((item) => adaptOrderAgreementDetailAltToUI(item)),
    selfDeliveryPlace: source?.SelfDeliveryPlace ?? '',
    sellerDeliveryPrice: source?.SellerDeliveryPrice ?? 0,
    transportCompanyDeliveryPrice: source?.TransportCompanyDeliveryPrice ?? 0,
  };
}

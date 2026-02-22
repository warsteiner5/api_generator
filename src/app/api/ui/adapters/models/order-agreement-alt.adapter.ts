import { ApiOrderAgreementAltDto } from '../../../swagger/models/api-order-agreement';
import { OrderAgreementAlt } from '../../models/order-agreement-alt.interface';
import { orderAdditionalServiceAltAdapter } from './order-additional-service-alt.adapter';
import { orderAgreementDetailAltAdapter } from './order-agreement-detail-alt.adapter';

export const orderAgreementAltAdapter = (source?: ApiOrderAgreementAltDto | null): OrderAgreementAlt => {
  return {
    chatId: source?.ChatId,
    comment: source?.Comment,
    isSelfDelivery: source?.IsSelfDelivery,
    isSellerDelivery: source?.IsSellerDelivery,
    isTransportCompanyDelivery: source?.IsTransportCompanyDelivery,
    orderAdditionalServices: source?.OrderAdditionalServices?.map((item) => orderAdditionalServiceAltAdapter(item)),
    orderAgreementDetails: source?.OrderAgreementDetails?.map((item) => orderAgreementDetailAltAdapter(item)),
    selfDeliveryPlace: source?.SelfDeliveryPlace,
    sellerDeliveryPrice: source?.SellerDeliveryPrice,
    transportCompanyDeliveryPrice: source?.TransportCompanyDeliveryPrice,
  };
}

import { OrderAgreementAlt } from '../../models/order-agreement-alt.interface';
import { ApiOrderAgreementAltDto } from '../../../swagger/models/api-order-agreement';
import { apiOrderAdditionalServiceAltDtoAdapter } from './api-order-additional-service.adapter';
import { apiOrderAgreementDetailAltDtoAdapter } from './api-order-agreement-detail.adapter';

export const apiOrderAgreementAltDtoAdapter = (source?: OrderAgreementAlt | null): ApiOrderAgreementAltDto => {
  return {
    ChatId: source?.chatId,
    Comment: source?.comment,
    IsSelfDelivery: source?.isSelfDelivery,
    IsSellerDelivery: source?.isSellerDelivery,
    IsTransportCompanyDelivery: source?.isTransportCompanyDelivery,
    OrderAdditionalServices: source?.orderAdditionalServices?.map((item) => apiOrderAdditionalServiceAltDtoAdapter(item)),
    OrderAgreementDetails: source?.orderAgreementDetails?.map((item) => apiOrderAgreementDetailAltDtoAdapter(item)),
    SelfDeliveryPlace: source?.selfDeliveryPlace,
    SellerDeliveryPrice: source?.sellerDeliveryPrice,
    TransportCompanyDeliveryPrice: source?.transportCompanyDeliveryPrice,
  };
}

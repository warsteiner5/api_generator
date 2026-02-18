import { OrderAgreementAlt } from '../../models/order-agreement-alt.interface';
import { ApiOrderAgreementAltDto } from '../../../swagger/models/api-order-agreement';
import { adaptApiOrderAdditionalServiceAltDto } from './api-order-additional-service.adapter';
import { adaptApiOrderAgreementDetailAltDto } from './api-order-agreement-detail.adapter';

export function adaptApiOrderAgreementAltDto(source?: OrderAgreementAlt | null): ApiOrderAgreementAltDto {
  return {
    ChatId: source?.chatId,
    Comment: source?.comment,
    IsSelfDelivery: source?.isSelfDelivery,
    IsSellerDelivery: source?.isSellerDelivery,
    IsTransportCompanyDelivery: source?.isTransportCompanyDelivery,
    OrderAdditionalServices: (source?.orderAdditionalServices ?? []).map((item) => adaptApiOrderAdditionalServiceAltDto(item)),
    OrderAgreementDetails: (source?.orderAgreementDetails ?? []).map((item) => adaptApiOrderAgreementDetailAltDto(item)),
    SelfDeliveryPlace: source?.selfDeliveryPlace,
    SellerDeliveryPrice: source?.sellerDeliveryPrice,
    TransportCompanyDeliveryPrice: source?.transportCompanyDeliveryPrice,
  };
}

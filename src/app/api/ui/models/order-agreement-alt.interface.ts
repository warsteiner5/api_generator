import { OrderAdditionalServiceAlt } from './order-additional-service-alt.interface';
import { OrderAgreementDetailAlt } from './order-agreement-detail-alt.interface';

// @ts-ignore
export interface OrderAgreementAlt {
  chatId: number;
  comment: string;
  isSelfDelivery: boolean;
  isSellerDelivery: boolean;
  isTransportCompanyDelivery: boolean;
  orderAdditionalServices: OrderAdditionalServiceAlt[];
  orderAgreementDetails: OrderAgreementDetailAlt[];
  selfDeliveryPlace: string;
  sellerDeliveryPrice: number;
  transportCompanyDeliveryPrice: number;
}

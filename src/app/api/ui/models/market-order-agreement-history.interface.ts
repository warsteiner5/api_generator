import { DealAgreementHistoryStateEnum } from '../enums/deal-agreement-history-state.enum';
import { DealAgreementHistoryTypeEnum } from '../enums/deal-agreement-history-type.enum';
import { DeliveryMethodAltEnum } from '../enums/delivery-method-alt.enum';
import { MarketOrderAdditionalService } from './market-order-additional-service.interface';
import { MarketOrderChangeDetail } from './market-order-change-detail.interface';

export interface MarketOrderAgreementHistory {
  additionalServices: MarketOrderAdditionalService[];
  agreementState: DealAgreementHistoryStateEnum;
  buyerOrgId: number;
  comment: string;
  dateTimeCreated: string;
  deliveryMethod: DeliveryMethodAltEnum;
  deliveryPlace: string;
  id: number;
  isSelfDelivery: boolean;
  isSellerDelivery: boolean;
  isTransportCompanyDelivery: boolean;
  isUnitBidding: boolean;
  orderChangeDetails: MarketOrderChangeDetail[];
  orderId: number;
  selfDeliveryPlace: string;
  sellerDeliveryPrice: number;
  sellerOrgId: number;
  tradeId: number;
  tradeLotId: number;
  transportCompanyDeliveryPrice: number;
  type: DealAgreementHistoryTypeEnum;
}

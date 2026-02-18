/* tslint:disable */
/* eslint-disable */
import { ApiOrderAdditionalServiceAltDto } from '../models/api-order-additional-service';
import { ApiOrderAgreementDetailAltDto } from '../models/api-order-agreement-detail';
export interface ApiOrderAgreementAltDto {
  ChatId?: number;
  Comment?: string | null;
  IsSelfDelivery?: boolean;
  IsSellerDelivery?: boolean;
  IsTransportCompanyDelivery?: boolean;
  OrderAdditionalServices?: Array<ApiOrderAdditionalServiceAltDto> | null;
  OrderAgreementDetails?: Array<ApiOrderAgreementDetailAltDto> | null;
  SelfDeliveryPlace?: string | null;
  SellerDeliveryPrice?: number | null;
  TransportCompanyDeliveryPrice?: number | null;
}

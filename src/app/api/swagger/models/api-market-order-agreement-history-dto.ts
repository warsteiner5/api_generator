/* tslint:disable */
/* eslint-disable */
import { ApiDealAgreementHistoryStateEnum } from '../models/api-deal-agreement-history-state-enum';
import { ApiDealAgreementHistoryTypeEnum } from '../models/api-deal-agreement-history-type-enum';
import { ApiDeliveryMethodAltEnum } from '../models/api-delivery-method';
import { ApiMarketOrderAdditionalServiceDto } from '../models/api-market-order-additional-service-dto';
import { ApiMarketOrderChangeDetailDto } from '../models/api-market-order-change-detail-dto';
export interface ApiMarketOrderAgreementHistoryDto {
  AdditionalServices?: Array<ApiMarketOrderAdditionalServiceDto> | null;
  AgreementState?: ApiDealAgreementHistoryStateEnum;
  BuyerOrgId?: number;
  Comment?: string | null;
  DateTimeCreated?: string | null;
  DeliveryMethod?: ApiDeliveryMethodAltEnum;
  DeliveryPlace?: string | null;
  Id?: number;
  IsSelfDelivery?: boolean;
  IsSellerDelivery?: boolean;
  IsTransportCompanyDelivery?: boolean;
  IsUnitBidding?: boolean;
  OrderChangeDetails?: Array<ApiMarketOrderChangeDetailDto> | null;
  OrderId?: number | null;
  SelfDeliveryPlace?: string | null;
  SellerDeliveryPrice?: number | null;
  SellerOrgId?: number;
  TradeId?: number | null;
  TradeLotId?: number | null;
  TransportCompanyDeliveryPrice?: number | null;
  Type?: ApiDealAgreementHistoryTypeEnum;
}

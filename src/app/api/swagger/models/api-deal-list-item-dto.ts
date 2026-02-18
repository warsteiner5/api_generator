/* tslint:disable */
/* eslint-disable */
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
import { ApiPurchaseMethodTypeEnum } from '../models/api-purchase-method-type-enum';
import { ApiTradeBusinessFlowEnum } from '../models/api-trade-business-flow-enum';
export interface ApiDealListItemDto {
  AdditionalAgreementConclusionDate?: string | null;
  AdditionalAgreementStateId?: number;
  AdditionalAgreementStateName?: string | null;
  BusinessFlowType?: ApiTradeBusinessFlowEnum | null;
  ConclusionDate?: string | null;
  CustomDealNumber?: string | null;
  CustomerGuid?: string;
  CustomerId?: number;
  CustomerInn?: string | null;
  CustomerName?: string | null;
  DealNumber?: string | null;
  DealObject?: ApiDealObjectEnum;
  DealSignedOutsideEShop?: boolean;
  DealStateId?: number;
  DealStateName?: string | null;
  DealSubject?: string | null;
  DeliveryPlace?: string | null;
  Id?: number;
  IsExternal?: boolean;
  IsNonElectronicForm?: boolean;
  IsPriceWithVat?: boolean | null;
  ParticipantGuid?: string | null;
  ParticipantId?: number | null;
  ParticipantInn?: string | null;
  ParticipantName?: string | null;
  Price?: number | null;
  PurchaseMethodType?: ApiPurchaseMethodTypeEnum;
  SignedOutOfEpReason?: string | null;
  StartPrice?: number | null;
  SumVat?: number | null;
  TerminationReason?: string | null;
  TradeId?: number;
  TradeLotStateId?: number;
  TradeLotStateName?: string | null;
  TradeNumber?: string | null;
  TradeOrganizerId?: number;
  TradeOrganizerName?: string | null;
}

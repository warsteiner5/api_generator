/* tslint:disable */
/* eslint-disable */
import { ApiDealFormEnum } from '../models/api-deal-form-enum';
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
import { ApiDealStateEnum } from '../models/api-deal-state-enum';
export interface ApiDealInfoAltDto {
  ConclusionDate?: string | null;
  CustomerId?: number;
  CustomerName?: string | null;
  DealForm?: ApiDealFormEnum;
  DealFormName?: string | null;
  DealObject?: ApiDealObjectEnum;
  DealSignedOutsideEShop?: boolean;
  DealState?: ApiDealStateEnum;
  DealStateName?: string | null;
  DealSubject?: string | null;
  Id?: number;
  InitialPrice?: number | null;
  ParticipantId?: number | null;
  ParticipantInn?: string | null;
  ParticipantName?: string | null;
  ParticipantWarningMessage?: string | null;
  Price?: number | null;
  PriceWarningMessage?: string | null;
  TradeNumber?: number;
  TradeOrganizerName?: string | null;
}

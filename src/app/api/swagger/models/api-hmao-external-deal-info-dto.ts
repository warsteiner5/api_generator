/* tslint:disable */
/* eslint-disable */
import { ApiDealStateEnum } from '../models/api-deal-state-enum';
export interface ApiHmaoExternalDealInfoDto {
  ConclusionDate?: string | null;
  ContractSignDate?: string | null;
  CustomerId?: number;
  CustomerName?: string | null;
  DealCustomNumber?: string | null;
  DealState?: ApiDealStateEnum;
  DealStateString?: string | null;
  Id?: number;
  IsNonElectronicForm?: boolean;
  ParticipantId?: number | null;
  ParticipantName?: string | null;
  Price?: number;
  SignByProviderDate?: string | null;
  TradeId?: number;
  TradeName?: string | null;
  TradeOrganizerName?: string | null;
}

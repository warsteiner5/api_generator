/* tslint:disable */
/* eslint-disable */
import { ApiNicRegistryParticipantInfoDto } from '../models/api-nic-registry-participant-info-dto';
export interface ApiNicRegistryEntryDto {
  ContractDate?: string | null;
  ContractNumber?: string | null;
  CreateDate?: string;
  CustomerInn?: string | null;
  CustomerKpp?: string | null;
  CustomerName?: string | null;
  Id?: number;
  ParticipantEmail?: string | null;
  ParticipantId?: number;
  ParticipantInn?: string | null;
  ParticipantKpp?: string | null;
  ParticipantName?: string | null;
  ReasonForAdding?: string | null;
  ResponsibleEmail?: string | null;
  ResponsibleFullName?: string | null;
  ResponsiblePhoneNumber?: string | null;
  TenantName?: string | null;
  TradeId?: number;
  TradeName?: string | null;
  Winners?: Array<ApiNicRegistryParticipantInfoDto> | null;
}

/* tslint:disable */
/* eslint-disable */
import { ApiNicRegistryParticipantInfoDto } from '../models/api-nic-registry-participant-info-dto';
export interface ApiNicRegistryTradeInfoDto {
  CustomerInn?: string | null;
  CustomerKpp?: string | null;
  CustomerName?: string | null;
  TenantName?: string | null;
  TradeId?: number;
  TradeName?: string | null;
  Winners?: Array<ApiNicRegistryParticipantInfoDto> | null;
}

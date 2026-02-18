/* tslint:disable */
/* eslint-disable */
import { ApiDealStateEnum } from '../models/api-deal-state-enum';
export interface ApiMarketTradeDealAltDto {
  CanDownloadDealArchiveFile?: boolean;
  ChatId?: number | null;
  ContractExecutionDate?: string | null;
  DealId?: number | null;
  DealState?: ApiDealStateEnum | null;
  HasDealFile?: boolean;
  ParticipantFullName?: string | null;
}

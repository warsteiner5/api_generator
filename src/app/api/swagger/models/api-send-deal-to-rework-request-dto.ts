/* tslint:disable */
/* eslint-disable */
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
export interface ApiSendDealToReworkRequestDto {
  ChatId?: number;
  Comment?: string | null;
  ContractExecutionDate?: string | null;
  DealId?: number;
  DealObject?: ApiDealObjectEnum;
  FileIds?: Array<string> | null;
}

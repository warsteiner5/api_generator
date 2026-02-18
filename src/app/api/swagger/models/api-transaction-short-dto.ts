/* tslint:disable */
/* eslint-disable */
import { ApiTransactionStateAltDto } from '../models/api-transaction-state';
import { ApiTransactionTypeAltDto } from '../models/api-transaction-type';
export interface ApiTransactionShortDto {
  ActionTime?: string;
  Comment?: string | null;
  CreationTime?: string;
  DestintationAccountNumber?: string | null;
  Direction?: string | null;
  ExternalService?: string | null;
  Id?: number;
  State?: ApiTransactionStateAltDto | null;
  Sum?: number;
  TradeId?: number | null;
  Type?: ApiTransactionTypeAltDto | null;
}

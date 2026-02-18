/* tslint:disable */
/* eslint-disable */
import { ApiFinDocumentDto } from '../models/api-fin-document-dto';
import { ApiTransactionStateAltDto } from '../models/api-transaction-state';
import { ApiTransactionTypeAltDto } from '../models/api-transaction-type';
export interface ApiTransactionDto {
  AccountNumber?: string | null;
  ActionTime?: string;
  Comment?: string | null;
  CreationTime?: string;
  DestintationAccountNumber?: string | null;
  Documents?: Array<ApiFinDocumentDto> | null;
  Id?: number;
  Service?: string | null;
  State?: ApiTransactionStateAltDto | null;
  Sum?: number;
  TradeId?: number | null;
  Type?: ApiTransactionTypeAltDto | null;
}

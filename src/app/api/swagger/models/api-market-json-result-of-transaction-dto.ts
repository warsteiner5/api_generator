/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTransactionDto } from '../models/api-transaction-dto';
export type ApiMarketJsonResultOfTransactionDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiTransactionDto | null;
};

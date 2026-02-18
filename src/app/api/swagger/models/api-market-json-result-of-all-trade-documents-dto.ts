/* tslint:disable */
/* eslint-disable */
import { ApiAllTradeDocumentsDto } from '../models/api-all-trade-documents-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfAllTradeDocumentsDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiAllTradeDocumentsDto | null;
};

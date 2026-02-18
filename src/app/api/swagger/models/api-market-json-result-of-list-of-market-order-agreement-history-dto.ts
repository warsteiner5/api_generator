/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketOrderAgreementHistoryDto } from '../models/api-market-order-agreement-history-dto';
export type ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiMarketOrderAgreementHistoryDto> | null;
};

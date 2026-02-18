/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTradeDto2 } from '../models/api-trade-dto-2';
export type ApiMarketJsonResultOfTradeDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiTradeDto2 | null;
};

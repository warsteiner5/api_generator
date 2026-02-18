/* tslint:disable */
/* eslint-disable */
import { ApiMarketFullDealDto } from '../models/api-market-full-deal-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfMarketFullDealDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMarketFullDealDto | null;
};

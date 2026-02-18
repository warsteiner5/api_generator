/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketOrderViewDto } from '../models/api-market-order-view-dto';
export type ApiMarketJsonResultOfMarketOrderViewDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMarketOrderViewDto | null;
};

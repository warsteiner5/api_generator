/* tslint:disable */
/* eslint-disable */
import { ApiMarketFullOrderDealDto } from '../models/api-market-full-order-deal-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfMarketFullOrderDealDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMarketFullOrderDealDto | null;
};

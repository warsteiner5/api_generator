/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOrderFromCartCreatedInfoAltDto } from '../models/api-order-from-cart-created-info';
export type ApiMarketJsonResultOfOrderFromCartCreatedInfoAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiOrderFromCartCreatedInfoAltDto | null;
};

/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiUserCountersDto } from '../models/api-user-counters-dto';
export type ApiMarketJsonResultOfUserCountersDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiUserCountersDto | null;
};

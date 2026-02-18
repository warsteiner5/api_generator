/* tslint:disable */
/* eslint-disable */
import { ApiDealHashToSignDto } from '../models/api-deal-hash-to-sign-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfDealHashToSignDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiDealHashToSignDto | null;
};

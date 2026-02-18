/* tslint:disable */
/* eslint-disable */
import { ApiDealCountdownDto } from '../models/api-deal-countdown-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfDealCountdownDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiDealCountdownDto | null;
};

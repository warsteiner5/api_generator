/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTradePlanMarketShortDto } from '../models/api-trade-plan-market-short-dto';
export type ApiMarketJsonResultOfTradePlanMarketShortDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiTradePlanMarketShortDto | null;
};

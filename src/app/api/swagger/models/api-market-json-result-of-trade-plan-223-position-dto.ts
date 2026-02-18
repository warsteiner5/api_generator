/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTradePlan223PositionDto } from '../models/api-trade-plan-223-position-dto';
export type ApiMarketJsonResultOfTradePlan223PositionDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiTradePlan223PositionDto | null;
};

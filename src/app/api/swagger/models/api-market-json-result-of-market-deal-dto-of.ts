/* tslint:disable */
/* eslint-disable */
import { ApiMarketDealDto } from '../models/api-market-deal-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfMarketDealDtoOf = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiMarketDealDto> | null;
};

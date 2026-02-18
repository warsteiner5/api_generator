/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketTradeViewDto } from '../models/api-market-trade-view-dto';
export type ApiMarketJsonResultOfMarketTradeViewDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMarketTradeViewDto | null;
};

/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTradePublishResultAltDto } from '../models/api-trade-publish-result';
export type ApiMarketJsonResultOfTradePublishResult = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiTradePublishResultAltDto | null;
};

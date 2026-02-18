/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketTradePersonAltDto } from '../models/api-market-trade-person';
export type ApiMarketJsonResultOfListOfMarketTradePerson = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiMarketTradePersonAltDto> | null;
};

/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketSearchRawModelAltDto } from '../models/api-market-search-raw-model';
export type ApiMarketJsonResultOfMarketSearchRawModel = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMarketSearchRawModelAltDto | null;
};

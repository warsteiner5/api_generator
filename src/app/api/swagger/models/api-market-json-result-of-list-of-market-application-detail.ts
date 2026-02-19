/* tslint:disable */
/* eslint-disable */
import { ApiMarketApplicationDetailAltDto } from '../models/api-market-application-detail';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfMarketApplicationDetailAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiMarketApplicationDetailAltDto> | null;
};

/* tslint:disable */
/* eslint-disable */
import { ApiApplicationDto2 } from '../models/api-application-dto-2';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfApplicationDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiApplicationDto2 | null;
};

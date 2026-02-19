/* tslint:disable */
/* eslint-disable */
import { ApiMarketEmployeeShortInfoAltDto } from '../models/api-market-employee-short-info';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfMarketEmployeeShortInfoAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMarketEmployeeShortInfoAltDto | null;
};

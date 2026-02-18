/* tslint:disable */
/* eslint-disable */
import { ApiEmployeeDto } from '../models/api-employee-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfEmployeeDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiEmployeeDto | null;
};

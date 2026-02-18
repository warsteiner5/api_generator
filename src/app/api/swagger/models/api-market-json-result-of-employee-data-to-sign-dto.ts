/* tslint:disable */
/* eslint-disable */
import { ApiEmployeeDataToSignDto } from '../models/api-employee-data-to-sign-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfEmployeeDataToSignDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiEmployeeDataToSignDto | null;
};

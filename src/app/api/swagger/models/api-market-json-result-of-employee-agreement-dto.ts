/* tslint:disable */
/* eslint-disable */
import { ApiEmployeeAgreementDto } from '../models/api-employee-agreement-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfEmployeeAgreementDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiEmployeeAgreementDto | null;
};

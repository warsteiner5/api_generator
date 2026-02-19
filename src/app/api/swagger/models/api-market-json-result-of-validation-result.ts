/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiValidationResultAltDto } from '../models/api-validation-result';
export type ApiMarketJsonResultOfValidationResultAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiValidationResultAltDto | null;
};

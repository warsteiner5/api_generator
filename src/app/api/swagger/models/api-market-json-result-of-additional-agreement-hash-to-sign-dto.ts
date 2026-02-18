/* tslint:disable */
/* eslint-disable */
import { ApiAdditionalAgreementHashToSignDto } from '../models/api-additional-agreement-hash-to-sign-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfAdditionalAgreementHashToSignDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiAdditionalAgreementHashToSignDto | null;
};

/* tslint:disable */
/* eslint-disable */
import { ApiCertificateVerifyResultAltDto } from '../models/api-certificate-verify-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCertificateVerifyResultAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiCertificateVerifyResultAltDto | null;
};

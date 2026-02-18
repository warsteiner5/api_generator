/* tslint:disable */
/* eslint-disable */
import { ApiCertificateVerifyResultAltDto } from '../models/api-certificate-verify-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCertificateVerifyResult = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiCertificateVerifyResultAltDto | null;
};

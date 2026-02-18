/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiParsedCertificateDto } from '../models/api-parsed-certificate-dto';
export type ApiMarketJsonResultOfParsedCertificateDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiParsedCertificateDto | null;
};

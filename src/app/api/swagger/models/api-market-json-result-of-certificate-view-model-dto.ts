/* tslint:disable */
/* eslint-disable */
import { ApiCertificateViewModelDto } from '../models/api-certificate-view-model-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCertificateViewModelDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiCertificateViewModelDto | null;
};

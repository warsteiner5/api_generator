/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCertificateVerifyModelAltDto } from '../../models/api-certificate-verify-model';
import { ApiMarketJsonResultOfCertificateVerifyResult } from '../../models/api-market-json-result-of-certificate-verify-result';

export interface AuthVerifyCertificate$Params {
      body?: ApiCertificateVerifyModelAltDto | null
}

export function authVerifyCertificate(http: HttpClient, rootUrl: string, params?: AuthVerifyCertificate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCertificateVerifyResult>> {
  const rb = new RequestBuilder(rootUrl, authVerifyCertificate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCertificateVerifyResult>;
    })
  );
}

authVerifyCertificate.PATH = '/bla-bla-vla/auth/certificate/verify';

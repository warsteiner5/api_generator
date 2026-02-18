/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfParsedCertificateDto } from '../../models/api-market-json-result-of-parsed-certificate-dto';

export interface CertificatesParseGet$Params {
  employeeId: number;
  fileGuid: string;
}

export function certificatesParseGet(http: HttpClient, rootUrl: string, params: CertificatesParseGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfParsedCertificateDto>> {
  const rb = new RequestBuilder(rootUrl, certificatesParseGet.PATH, 'get');
  if (params) {
    rb.query('employeeId', params.employeeId, {});
    rb.path('fileGuid', params.fileGuid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfParsedCertificateDto>;
    })
  );
}

certificatesParseGet.PATH = '/bla-bla-vla/certificates/parse/{fileGuid}';

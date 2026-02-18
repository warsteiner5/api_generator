/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiRejectAdditionalAgreementDto } from '../../models/api-reject-additional-agreement-dto';

export interface AdditionalAgreementReject$Params {
      body?: ApiRejectAdditionalAgreementDto | null
}

export function additionalAgreementReject(http: HttpClient, rootUrl: string, params?: AdditionalAgreementReject$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementReject.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

additionalAgreementReject.PATH = '/bla-bla-vla/AdditionalAgreement/Reject';

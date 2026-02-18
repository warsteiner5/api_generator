/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';
import { ApiRejectAdditionalAgreementDto } from '../../models/api-reject-additional-agreement-dto';

export interface AdditionalAgreementsReject$Params {
      body?: ApiRejectAdditionalAgreementDto | null
}

export function additionalAgreementsReject(http: HttpClient, rootUrl: string, params?: AdditionalAgreementsReject$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementsReject.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

additionalAgreementsReject.PATH = '/bla-bla-vla/additionalAgreements/reject';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface AdditionalAgreementsSendToParticipant$Params {
  id: number;
}

export function additionalAgreementsSendToParticipant(http: HttpClient, rootUrl: string, params: AdditionalAgreementsSendToParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementsSendToParticipant.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
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

additionalAgreementsSendToParticipant.PATH = '/bla-bla-vla/additionalAgreements/{id}/send-to-participant';

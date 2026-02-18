/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AdditionalAgreementSendToParticipant$Params {
  id: number;
}

export function additionalAgreementSendToParticipant(http: HttpClient, rootUrl: string, params: AdditionalAgreementSendToParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementSendToParticipant.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
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

additionalAgreementSendToParticipant.PATH = '/bla-bla-vla/AdditionalAgreement/{id}/SendToParticipant';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiIsActualOffersParamAltDto } from '../../models/api-is-actual-offers-param';

export interface ParticipantOfferGetActualOfferIds$Params {
      body?: ApiIsActualOffersParamAltDto | null
}

export function participantOfferGetActualOfferIds(http: HttpClient, rootUrl: string, params?: ParticipantOfferGetActualOfferIds$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, participantOfferGetActualOfferIds.PATH, 'post');
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

participantOfferGetActualOfferIds.PATH = '/bla-bla-vla/participantoffer/actual-offer-ids';

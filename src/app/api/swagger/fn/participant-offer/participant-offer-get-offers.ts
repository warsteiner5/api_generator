/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiOfferFilterAltDto } from '../../models/api-offer-filter';

export interface ParticipantOfferGetOffers$Params {
      body?: ApiOfferFilterAltDto | null
}

export function participantOfferGetOffers(http: HttpClient, rootUrl: string, params?: ParticipantOfferGetOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, participantOfferGetOffers.PATH, 'post');
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

participantOfferGetOffers.PATH = '/bla-bla-vla/participantoffer/GetOffers';

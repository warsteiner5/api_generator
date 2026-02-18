/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketJsonVoidResult } from '../../models/api-market-json-result-of-market-json-void-result';

export interface OffersCreateParticipantOfferActualizationRequest$Params {
  id: number;
}

export function offersCreateParticipantOfferActualizationRequest(http: HttpClient, rootUrl: string, params: OffersCreateParticipantOfferActualizationRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketJsonVoidResult>> {
  const rb = new RequestBuilder(rootUrl, offersCreateParticipantOfferActualizationRequest.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketJsonVoidResult>;
    })
  );
}

offersCreateParticipantOfferActualizationRequest.PATH = '/bla-bla-vla/offers/{id}/actualizationRequest';

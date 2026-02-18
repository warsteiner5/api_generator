/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto } from '../../models/api-market-json-result-of-get-participant-offers-by-trade-response-dto';

export interface ParticipantOfferToTradeGetOffersByTradeId$Params {
  id: number;
}

export function participantOfferToTradeGetOffersByTradeId(http: HttpClient, rootUrl: string, params: ParticipantOfferToTradeGetOffersByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto>> {
  const rb = new RequestBuilder(rootUrl, participantOfferToTradeGetOffersByTradeId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto>;
    })
  );
}

participantOfferToTradeGetOffersByTradeId.PATH = '/bla-bla-vla/offerToTrade/participantOffersByTradeId/{id}';

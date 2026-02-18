/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateParticipantOffersToTradeDto } from '../../models/api-create-participant-offers-to-trade-dto';
import { ApiMarketJsonResultOfMarketJsonVoidResult } from '../../models/api-market-json-result-of-market-json-void-result';

export interface ParticipantOfferToTradeCreateParticipantOffersToTrade$Params {
  tradeId: number;
      body?: ApiCreateParticipantOffersToTradeDto | null
}

export function participantOfferToTradeCreateParticipantOffersToTrade(http: HttpClient, rootUrl: string, params: ParticipantOfferToTradeCreateParticipantOffersToTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketJsonVoidResult>> {
  const rb = new RequestBuilder(rootUrl, participantOfferToTradeCreateParticipantOffersToTrade.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.body(params.body, 'application/json');
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

participantOfferToTradeCreateParticipantOffersToTrade.PATH = '/bla-bla-vla/offerToTrade/{tradeId}/items/create';

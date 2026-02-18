/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf } from '../../models/api-market-json-result-of-participant-offer-short-info-dto-of';

export interface ParticipantOfferToTradeGetParticipantOffersByTradeId$Params {
  tradeId: number;
  organizationId: number;
}

export function participantOfferToTradeGetParticipantOffersByTradeId(http: HttpClient, rootUrl: string, params: ParticipantOfferToTradeGetParticipantOffersByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf>> {
  const rb = new RequestBuilder(rootUrl, participantOfferToTradeGetParticipantOffersByTradeId.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.path('organizationId', params.organizationId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf>;
    })
  );
}

participantOfferToTradeGetParticipantOffersByTradeId.PATH = '/bla-bla-vla/offerToTrade/{tradeId}/organization/{organizationId}';

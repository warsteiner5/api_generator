/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto } from '../../models/api-market-json-result-of-list-of-participant-offer-short-info-dto';

export interface ParticipantOfferToTradeGetOffersByLotItemId$Params {
  id: number;
}

export function participantOfferToTradeGetOffersByLotItemId(http: HttpClient, rootUrl: string, params: ParticipantOfferToTradeGetOffersByLotItemId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto>> {
  const rb = new RequestBuilder(rootUrl, participantOfferToTradeGetOffersByLotItemId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto>;
    })
  );
}

participantOfferToTradeGetOffersByLotItemId.PATH = '/bla-bla-vla/offerToTrade/participantOffersByLotItemId/{id}';

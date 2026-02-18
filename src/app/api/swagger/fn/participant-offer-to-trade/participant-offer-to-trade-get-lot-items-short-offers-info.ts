/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf } from '../../models/api-market-json-result-of-lot-items-participant-offers-info-dto-of';

export interface ParticipantOfferToTradeGetLotItemsShortOffersInfo$Params {
  tradeId: number;
}

export function participantOfferToTradeGetLotItemsShortOffersInfo(http: HttpClient, rootUrl: string, params: ParticipantOfferToTradeGetLotItemsShortOffersInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf>> {
  const rb = new RequestBuilder(rootUrl, participantOfferToTradeGetLotItemsShortOffersInfo.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf>;
    })
  );
}

participantOfferToTradeGetLotItemsShortOffersInfo.PATH = '/bla-bla-vla/offerToTrade/{tradeId}/participant-offers/short-info';

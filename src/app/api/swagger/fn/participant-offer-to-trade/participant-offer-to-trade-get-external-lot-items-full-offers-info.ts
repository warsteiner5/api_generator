/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf } from '../../models/api-market-json-result-of-external-lot-items-participant-offers-info-dto-of';

export interface ParticipantOfferToTradeGetExternalLotItemsFullOffersInfo$Params {
  tradeId: number;
}

export function participantOfferToTradeGetExternalLotItemsFullOffersInfo(http: HttpClient, rootUrl: string, params: ParticipantOfferToTradeGetExternalLotItemsFullOffersInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf>> {
  const rb = new RequestBuilder(rootUrl, participantOfferToTradeGetExternalLotItemsFullOffersInfo.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf>;
    })
  );
}

participantOfferToTradeGetExternalLotItemsFullOffersInfo.PATH = '/bla-bla-vla/offerToTrade/{tradeId}/participant-offers/external/full-info';

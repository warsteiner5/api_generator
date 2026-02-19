/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf } from '../../models/api-market-json-result-of-lot-items-participant-offers-info-dto-of';

export interface ParticipantOfferToTradeGetExternalLotItemsShortOffersInfo$Params {
  tradeId: number;
}

export function participantOfferToTradeGetExternalLotItemsShortOffersInfo(http: HttpClient, rootUrl: string, params: ParticipantOfferToTradeGetExternalLotItemsShortOffersInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf>> {
  const rb = new RequestBuilder(rootUrl, participantOfferToTradeGetExternalLotItemsShortOffersInfo.PATH, 'get');
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

participantOfferToTradeGetExternalLotItemsShortOffersInfo.PATH = '/market/api/v1/offerToTrade/{tradeId}/participant-offers/external/short-info';

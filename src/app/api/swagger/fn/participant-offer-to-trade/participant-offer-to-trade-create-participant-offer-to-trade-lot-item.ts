/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketJsonVoidResultAltDto } from '../../models/api-market-json-result-of-market-json-void-result';
import { ApiParticipantOfferToTradeLotItemDto } from '../../models/api-participant-offer-to-trade-lot-item-dto';

export interface ParticipantOfferToTradeCreateParticipantOfferToTradeLotItem$Params {
      body?: ApiParticipantOfferToTradeLotItemDto | null
}

export function participantOfferToTradeCreateParticipantOfferToTradeLotItem(http: HttpClient, rootUrl: string, params?: ParticipantOfferToTradeCreateParticipantOfferToTradeLotItem$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, participantOfferToTradeCreateParticipantOfferToTradeLotItem.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketJsonVoidResultAltDto>;
    })
  );
}

participantOfferToTradeCreateParticipantOfferToTradeLotItem.PATH = '/market/api/v1/offerToTrade/createParticipantOfferToTrade';

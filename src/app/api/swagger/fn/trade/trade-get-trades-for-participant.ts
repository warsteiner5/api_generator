/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiSearchResultOfTradeInfoForParticipantAltDto } from '../../models/api-api-search-result-of-trade-info-for-participant';
import { ApiTradesFilterObjectForParticipantAltDto } from '../../models/api-trades-filter-object-for-participant';

export interface TradeGetTradesForParticipant$Params {
      body?: ApiTradesFilterObjectForParticipantAltDto | null
}

export function tradeGetTradesForParticipant(http: HttpClient, rootUrl: string, params?: TradeGetTradesForParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfTradeInfoForParticipantAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradeGetTradesForParticipant.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiSearchResultOfTradeInfoForParticipantAltDto>;
    })
  );
}

tradeGetTradesForParticipant.PATH = '/bla-bla-vla/Trade/GetTradesForParticipant';

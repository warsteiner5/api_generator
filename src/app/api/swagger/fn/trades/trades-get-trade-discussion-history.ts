/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfIDiscussionHistoryDto } from '../../models/api-market-json-result-of-list-of-i-discussion-history-dto';

export interface TradesGetTradeDiscussionHistory$Params {
  tradeId: number;
}

export function tradesGetTradeDiscussionHistory(http: HttpClient, rootUrl: string, params: TradesGetTradeDiscussionHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfIDiscussionHistoryDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetTradeDiscussionHistory.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfIDiscussionHistoryDto>;
    })
  );
}

tradesGetTradeDiscussionHistory.PATH = '/bla-bla-vla/trades/{tradeId}/discussion-history';

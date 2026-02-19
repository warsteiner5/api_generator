/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIDiscussionHistoryDtoOf } from '../../models/api-market-json-result-of-i-discussion-history-dto-of';

export interface TradeProtocolsGetDiscussionHistory$Params {
  tradeId: number;
}

export function tradeProtocolsGetDiscussionHistory(http: HttpClient, rootUrl: string, params: TradeProtocolsGetDiscussionHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIDiscussionHistoryDtoOf>> {
  const rb = new RequestBuilder(rootUrl, tradeProtocolsGetDiscussionHistory.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIDiscussionHistoryDtoOf>;
    })
  );
}

tradeProtocolsGetDiscussionHistory.PATH = '/market/api/v1/protocols/trades/{tradeId}/discussion-history';

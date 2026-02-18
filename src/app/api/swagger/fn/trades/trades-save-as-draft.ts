/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTradePublishResult } from '../../models/api-market-json-result-of-trade-publish-result';
import { ApiTradeDto2 } from '../../models/api-trade-dto-2';

export interface TradesSaveAsDraft$Params {
      body?: ApiTradeDto2 | null
}

export function tradesSaveAsDraft(http: HttpClient, rootUrl: string, params?: TradesSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>> {
  const rb = new RequestBuilder(rootUrl, tradesSaveAsDraft.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>;
    })
  );
}

tradesSaveAsDraft.PATH = '/bla-bla-vla/trades/draft';

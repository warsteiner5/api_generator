/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketTradeViewDto } from '../../models/api-market-json-result-of-market-trade-view-dto';

export interface TradesGetTradeForView$Params {
  id: number;
}

export function tradesGetTradeForView(http: HttpClient, rootUrl: string, params: TradesGetTradeForView$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketTradeViewDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetTradeForView.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketTradeViewDto>;
    })
  );
}

tradesGetTradeForView.PATH = '/bla-bla-vla/trades/{id}';

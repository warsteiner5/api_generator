/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiTradeDto } from '../../models/api-trade-dto';

export interface TradeGetTradeCopy$Params {
  id: number;
}

export function tradeGetTradeCopy(http: HttpClient, rootUrl: string, params: TradeGetTradeCopy$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeDto>> {
  const rb = new RequestBuilder(rootUrl, tradeGetTradeCopy.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiTradeDto>;
    })
  );
}

tradeGetTradeCopy.PATH = '/bla-bla-vla/Trade/Copy/{id}';

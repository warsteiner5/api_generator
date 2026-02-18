/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiTradeViewDto } from '../../models/api-trade-view-dto';

export interface TradeGetTradeInfoByLotId$Params {
  id: number;
}

export function tradeGetTradeInfoByLotId(http: HttpClient, rootUrl: string, params: TradeGetTradeInfoByLotId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeViewDto>> {
  const rb = new RequestBuilder(rootUrl, tradeGetTradeInfoByLotId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiTradeViewDto>;
    })
  );
}

tradeGetTradeInfoByLotId.PATH = '/bla-bla-vla/Trade/{id}/GetTradeInfoByLotId';

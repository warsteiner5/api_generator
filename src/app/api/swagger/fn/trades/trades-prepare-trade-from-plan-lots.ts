/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTradeDto } from '../../models/api-market-json-result-of-trade-dto';

export interface TradesPrepareTradeFromPlanLots$Params {
  marketPlanLotId: number;
}

export function tradesPrepareTradeFromPlanLots(http: HttpClient, rootUrl: string, params: TradesPrepareTradeFromPlanLots$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradeDto>> {
  const rb = new RequestBuilder(rootUrl, tradesPrepareTradeFromPlanLots.PATH, 'get');
  if (params) {
    rb.path('marketPlanLotId', params.marketPlanLotId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTradeDto>;
    })
  );
}

tradesPrepareTradeFromPlanLots.PATH = '/bla-bla-vla/trades/prepare-from-plan/{marketPlanLotId}';

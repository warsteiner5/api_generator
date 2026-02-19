/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTradeAvailableOperationsDto } from '../../models/api-market-json-result-of-trade-available-operations-dto';

export interface AvailableOperationsGetByTrade$Params {
  tradeId: number;
}

export function availableOperationsGetByTrade(http: HttpClient, rootUrl: string, params: AvailableOperationsGetByTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradeAvailableOperationsDto>> {
  const rb = new RequestBuilder(rootUrl, availableOperationsGetByTrade.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTradeAvailableOperationsDto>;
    })
  );
}

availableOperationsGetByTrade.PATH = '/market/api/v1/available-operations/trade/{tradeId}';

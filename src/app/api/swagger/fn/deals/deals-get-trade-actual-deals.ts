/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketDealDtoOf } from '../../models/api-market-json-result-of-market-deal-dto-of';

export interface DealsGetTradeActualDeals$Params {
  tradeId: number;
}

export function dealsGetTradeActualDeals(http: HttpClient, rootUrl: string, params: DealsGetTradeActualDeals$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketDealDtoOf>> {
  const rb = new RequestBuilder(rootUrl, dealsGetTradeActualDeals.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketDealDtoOf>;
    })
  );
}

dealsGetTradeActualDeals.PATH = '/market/api/v1/deals/GetDealsByTradeId/{tradeId}';

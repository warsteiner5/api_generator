/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateTradeFromPlanLotsRequestAltDto } from '../../models/api-create-trade-from-plan-lots-request';
import { ApiMarketJsonResultOfIntegerAltDto } from '../../models/api-market-json-result-of-integer';

export interface TradesCreateTradeFromPlanLots$Params {
      body?: ApiCreateTradeFromPlanLotsRequestAltDto | null
}

export function tradesCreateTradeFromPlanLots(http: HttpClient, rootUrl: string, params?: TradesCreateTradeFromPlanLots$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesCreateTradeFromPlanLots.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>;
    })
  );
}

tradesCreateTradeFromPlanLots.PATH = '/market/api/v1/trades/create-from-plan';

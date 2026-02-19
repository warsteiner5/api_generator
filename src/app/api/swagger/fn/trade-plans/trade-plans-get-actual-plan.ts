/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTradePlanMarketShortDto } from '../../models/api-market-json-result-of-trade-plan-market-short-dto';

export interface TradePlansGetActualPlan$Params {
}

export function tradePlansGetActualPlan(http: HttpClient, rootUrl: string, params?: TradePlansGetActualPlan$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePlanMarketShortDto>> {
  const rb = new RequestBuilder(rootUrl, tradePlansGetActualPlan.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTradePlanMarketShortDto>;
    })
  );
}

tradePlansGetActualPlan.PATH = '/market/api/v1/plans';

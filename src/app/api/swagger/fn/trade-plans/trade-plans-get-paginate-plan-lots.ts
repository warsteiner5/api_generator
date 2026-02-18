/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-trade-plan-lot-market-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface TradePlansGetPaginatePlanLots$Params {
  id: number;
      body?: ApiSearchObjectAltDto | null
}

export function tradePlansGetPaginatePlanLots(http: HttpClient, rootUrl: string, params: TradePlansGetPaginatePlanLots$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto>> {
  const rb = new RequestBuilder(rootUrl, tradePlansGetPaginatePlanLots.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto>;
    })
  );
}

tradePlansGetPaginatePlanLots.PATH = '/bla-bla-vla/plans/{id}/lots';

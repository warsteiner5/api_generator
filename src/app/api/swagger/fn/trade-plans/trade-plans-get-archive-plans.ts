/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-trade-plan-market-short-dto';
import { ApiTradePlansArchiveFilterObjectAltDto } from '../../models/api-trade-plans-archive-filter-object';

export interface TradePlansGetArchivePlans$Params {
      body?: ApiTradePlansArchiveFilterObjectAltDto | null
}

export function tradePlansGetArchivePlans(http: HttpClient, rootUrl: string, params?: TradePlansGetArchivePlans$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto>> {
  const rb = new RequestBuilder(rootUrl, tradePlansGetArchivePlans.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto>;
    })
  );
}

tradePlansGetArchivePlans.PATH = '/bla-bla-vla/plans/archive';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealFilterObjectAltDto } from '../../models/api-deal-filter-object';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfo } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-deal-info';

export interface DealsGetDeals$Params {
      body?: ApiDealFilterObjectAltDto | null
}

export function dealsGetDeals(http: HttpClient, rootUrl: string, params?: DealsGetDeals$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfo>> {
  const rb = new RequestBuilder(rootUrl, dealsGetDeals.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfo>;
    })
  );
}

dealsGetDeals.PATH = '/bla-bla-vla/deals/my';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiSearchResultOfDealInfoAltDto } from '../../models/api-api-search-result-of-deal-info';
import { ApiDealFilterObjectAltDto } from '../../models/api-deal-filter-object';

export interface DealGetDeals$Params {
      body?: ApiDealFilterObjectAltDto | null
}

export function dealGetDeals(http: HttpClient, rootUrl: string, params?: DealGetDeals$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfDealInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealGetDeals.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiSearchResultOfDealInfoAltDto>;
    })
  );
}

dealGetDeals.PATH = '/api/Deal/GetDeals';

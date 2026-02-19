/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-nic-registry-grid-dto';
import { ApiNicRegistrySearchFilterDto } from '../../models/api-nic-registry-search-filter-dto';

export interface NicRegistriesSearch$Params {
      body?: ApiNicRegistrySearchFilterDto | null
}

export function nicRegistriesSearch(http: HttpClient, rootUrl: string, params?: NicRegistriesSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto>> {
  const rb = new RequestBuilder(rootUrl, nicRegistriesSearch.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto>;
    })
  );
}

nicRegistriesSearch.PATH = '/api/NicRegistry/search';

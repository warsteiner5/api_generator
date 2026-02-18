/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-nic-registry-grid-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface NicRegistrySearch$Params {
      body?: ApiSearchObjectAltDto | null
}

export function nicRegistrySearch(http: HttpClient, rootUrl: string, params?: NicRegistrySearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto>> {
  const rb = new RequestBuilder(rootUrl, nicRegistrySearch.PATH, 'post');
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

nicRegistrySearch.PATH = '/bla-bla-vla/registry/nic/search';

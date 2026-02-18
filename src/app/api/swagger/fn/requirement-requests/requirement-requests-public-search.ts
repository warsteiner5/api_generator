/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-requirement-requests-search-result-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface RequirementRequestsPublicSearch$Params {
      body?: ApiSearchObjectAltDto | null
}

export function requirementRequestsPublicSearch(http: HttpClient, rootUrl: string, params?: RequirementRequestsPublicSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsPublicSearch.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto>;
    })
  );
}

requirementRequestsPublicSearch.PATH = '/bla-bla-vla/RequirementRequests/PublicSearch';

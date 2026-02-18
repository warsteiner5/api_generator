/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-tag-operator-view-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface TagsGetTagsForOperator$Params {
      body?: ApiSearchObjectAltDto | null
}

export function tagsGetTagsForOperator(http: HttpClient, rootUrl: string, params?: TagsGetTagsForOperator$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto>> {
  const rb = new RequestBuilder(rootUrl, tagsGetTagsForOperator.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto>;
    })
  );
}

tagsGetTagsForOperator.PATH = '/bla-bla-vla/tags/operator';

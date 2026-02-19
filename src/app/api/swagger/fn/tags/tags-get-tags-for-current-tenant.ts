/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTagViewDtoOf } from '../../models/api-market-json-result-of-tag-view-dto-of';

export interface TagsGetTagsForCurrentTenant$Params {
}

export function tagsGetTagsForCurrentTenant(http: HttpClient, rootUrl: string, params?: TagsGetTagsForCurrentTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTagViewDtoOf>> {
  const rb = new RequestBuilder(rootUrl, tagsGetTagsForCurrentTenant.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTagViewDtoOf>;
    })
  );
}

tagsGetTagsForCurrentTenant.PATH = '/market/api/v1/tags';

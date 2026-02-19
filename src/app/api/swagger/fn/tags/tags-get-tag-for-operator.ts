/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTagOperatorViewDto } from '../../models/api-market-json-result-of-tag-operator-view-dto';

export interface TagsGetTagForOperator$Params {
  id: number;
}

export function tagsGetTagForOperator(http: HttpClient, rootUrl: string, params: TagsGetTagForOperator$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTagOperatorViewDto>> {
  const rb = new RequestBuilder(rootUrl, tagsGetTagForOperator.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTagOperatorViewDto>;
    })
  );
}

tagsGetTagForOperator.PATH = '/market/api/v1/tags/{id}/operator';

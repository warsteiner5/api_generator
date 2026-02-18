/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfCategoryWithChildrenDto } from '../../models/api-market-json-result-of-category-with-children-dto';

export interface DictionariesGetCategory$Params {
  code: string | null;
}

export function dictionariesGetCategory(http: HttpClient, rootUrl: string, params: DictionariesGetCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCategoryWithChildrenDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetCategory.PATH, 'get');
  if (params) {
    rb.path('code', params.code, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCategoryWithChildrenDto>;
    })
  );
}

dictionariesGetCategory.PATH = '/bla-bla-vla/dictionaries/category/{code}';

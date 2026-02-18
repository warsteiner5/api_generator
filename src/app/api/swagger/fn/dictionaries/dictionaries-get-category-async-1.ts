/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfCategoryDtoOf } from '../../models/api-market-json-result-of-category-dto-of';

export interface DictionariesGetCategoryAsync1$Params {
  predicate: string | null;
}

export function dictionariesGetCategoryAsync1(http: HttpClient, rootUrl: string, params: DictionariesGetCategoryAsync1$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCategoryDtoOf>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetCategoryAsync1.PATH, 'get');
  if (params) {
    rb.query('predicate', params.predicate, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCategoryDtoOf>;
    })
  );
}

dictionariesGetCategoryAsync1.PATH = '/bla-bla-vla/dictionaries/category/search';

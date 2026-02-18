/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfCategoryDto } from '../../models/api-market-json-result-of-list-of-category-dto';

export interface DictionariesGetCategoryByParentCode$Params {
  parentCode: string | null;
}

export function dictionariesGetCategoryByParentCode(http: HttpClient, rootUrl: string, params: DictionariesGetCategoryByParentCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCategoryDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetCategoryByParentCode.PATH, 'get');
  if (params) {
    rb.query('parentCode', params.parentCode, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfCategoryDto>;
    })
  );
}

dictionariesGetCategoryByParentCode.PATH = '/bla-bla-vla/dictionaries/category/childs';

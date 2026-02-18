/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue } from '../../models/api-market-json-result-of-i-read-only-collection-of-ksr-value';

export interface DictionariesGetKsrByParentCode$Params {
  parentCode: string | null;
}

export function dictionariesGetKsrByParentCode(http: HttpClient, rootUrl: string, params: DictionariesGetKsrByParentCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetKsrByParentCode.PATH, 'get');
  if (params) {
    rb.path('parentCode', params.parentCode, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue>;
    })
  );
}

dictionariesGetKsrByParentCode.PATH = '/bla-bla-vla/dictionaries/ksr/{parentCode}';

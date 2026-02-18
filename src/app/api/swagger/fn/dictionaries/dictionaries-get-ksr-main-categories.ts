/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategory } from '../../models/api-market-json-result-of-i-read-only-collection-of-ksr-category';

export interface DictionariesGetKsrMainCategories$Params {
}

export function dictionariesGetKsrMainCategories(http: HttpClient, rootUrl: string, params?: DictionariesGetKsrMainCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategory>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetKsrMainCategories.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategory>;
    })
  );
}

dictionariesGetKsrMainCategories.PATH = '/bla-bla-vla/dictionaries/ksr/groups';

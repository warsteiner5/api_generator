/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfOkved2Value } from '../../models/api-market-json-result-of-list-of-okved-2-value';

export interface DictionariesGetOkved2AutocompleteListGet$Params {
  searchValue: string | null;
  maxReturnCount: number | null;
}

export function dictionariesGetOkved2AutocompleteListGet(http: HttpClient, rootUrl: string, params: DictionariesGetOkved2AutocompleteListGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkved2Value>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetOkved2AutocompleteListGet.PATH, 'get');
  if (params) {
    rb.path('searchValue', params.searchValue, {});
    rb.path('maxReturnCount', params.maxReturnCount, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfOkved2Value>;
    })
  );
}

dictionariesGetOkved2AutocompleteListGet.PATH = '/bla-bla-vla/dictionaries/okved2/autocomplete/{searchValue}/maxReturnCount/{maxReturnCount}';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfOkpd2Value } from '../../models/api-market-json-result-of-list-of-okpd-2-value';

export interface DictionariesGetOkdp2AutocompleteListGet$Params {
  searchValue: string | null;
  maxReturnCount: number | null;
}

export function dictionariesGetOkdp2AutocompleteListGet(http: HttpClient, rootUrl: string, params: DictionariesGetOkdp2AutocompleteListGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2Value>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetOkdp2AutocompleteListGet.PATH, 'get');
  if (params) {
    rb.path('searchValue', params.searchValue, {});
    rb.path('maxReturnCount', params.maxReturnCount, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2Value>;
    })
  );
}

dictionariesGetOkdp2AutocompleteListGet.PATH = '/bla-bla-vla/dictionaries/okpd2/autocomplete/{searchValue}/maxReturnCount/{maxReturnCount}';

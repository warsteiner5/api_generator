/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfOkpd2ValueAltDto } from '../../models/api-market-json-result-of-list-of-okpd-2-value';

export interface DictionariesGetOkdp2AutocompleteListGet$Params {
  searchValue: string | null;
  maxReturnCount: number | null;
}

export function dictionariesGetOkdp2AutocompleteListGet(http: HttpClient, rootUrl: string, params: DictionariesGetOkdp2AutocompleteListGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2ValueAltDto>> {
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
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2ValueAltDto>;
    })
  );
}

dictionariesGetOkdp2AutocompleteListGet.PATH = '/market/api/v1/dictionaries/okpd2/autocomplete/{searchValue}/maxReturnCount/{maxReturnCount}';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto } from '../../models/api-market-json-result-of-i-read-only-collection-of-ksr-value';

export interface DictionariesGetKsrAutocompleteListGet$Params {
  searchValue: string | null;
  maxReturnCount: number | null;
}

export function dictionariesGetKsrAutocompleteListGet(http: HttpClient, rootUrl: string, params: DictionariesGetKsrAutocompleteListGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetKsrAutocompleteListGet.PATH, 'get');
  if (params) {
    rb.path('searchValue', params.searchValue, {});
    rb.path('maxReturnCount', params.maxReturnCount, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>;
    })
  );
}

dictionariesGetKsrAutocompleteListGet.PATH = '/market/api/v1/dictionaries/ksr/autocomplete/{searchValue}/maxReturnCount/{maxReturnCount}';

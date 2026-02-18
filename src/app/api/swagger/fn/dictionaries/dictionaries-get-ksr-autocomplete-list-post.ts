/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiKsrFilterAltDto } from '../../models/api-ksr-filter';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue } from '../../models/api-market-json-result-of-i-read-only-collection-of-ksr-value';

export interface DictionariesGetKsrAutocompleteListPost$Params {
      body?: ApiKsrFilterAltDto | null
}

export function dictionariesGetKsrAutocompleteListPost(http: HttpClient, rootUrl: string, params?: DictionariesGetKsrAutocompleteListPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetKsrAutocompleteListPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

dictionariesGetKsrAutocompleteListPost.PATH = '/bla-bla-vla/dictionaries/ksr/autocomplete';

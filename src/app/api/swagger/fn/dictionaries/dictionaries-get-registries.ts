/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItem } from '../../models/api-market-json-result-of-i-read-only-collection-of-dictionary-item';

export interface DictionariesGetRegistries$Params {
  countryCode: string | null;
}

export function dictionariesGetRegistries(http: HttpClient, rootUrl: string, params: DictionariesGetRegistries$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItem>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetRegistries.PATH, 'get');
  if (params) {
    rb.path('countryCode', params.countryCode, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItem>;
    })
  );
}

dictionariesGetRegistries.PATH = '/bla-bla-vla/dictionaries/registries/country/{countryCode}';

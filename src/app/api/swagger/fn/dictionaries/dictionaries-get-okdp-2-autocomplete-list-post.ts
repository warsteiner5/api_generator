/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfOkpd2Value } from '../../models/api-market-json-result-of-list-of-okpd-2-value';
import { ApiOkpd2FilterAltDto } from '../../models/api-okpd-2-filter';

export interface DictionariesGetOkdp2AutocompleteListPost$Params {
      body?: ApiOkpd2FilterAltDto | null
}

export function dictionariesGetOkdp2AutocompleteListPost(http: HttpClient, rootUrl: string, params?: DictionariesGetOkdp2AutocompleteListPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2Value>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetOkdp2AutocompleteListPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

dictionariesGetOkdp2AutocompleteListPost.PATH = '/bla-bla-vla/dictionaries/okpd2/autocomplete';

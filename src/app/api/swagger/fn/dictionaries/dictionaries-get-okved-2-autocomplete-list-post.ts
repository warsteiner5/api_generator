/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfOkved2ValueAltDto } from '../../models/api-market-json-result-of-list-of-okved-2-value';
import { ApiOkved2FilterAltDto } from '../../models/api-okved-2-filter';

export interface DictionariesGetOkved2AutocompleteListPost$Params {
      body?: ApiOkved2FilterAltDto | null
}

export function dictionariesGetOkved2AutocompleteListPost(http: HttpClient, rootUrl: string, params?: DictionariesGetOkved2AutocompleteListPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkved2ValueAltDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetOkved2AutocompleteListPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfOkved2ValueAltDto>;
    })
  );
}

dictionariesGetOkved2AutocompleteListPost.PATH = '/market/api/v1/dictionaries/okved2/autocomplete';

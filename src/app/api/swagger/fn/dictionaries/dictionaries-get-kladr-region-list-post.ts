/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfKeyValuePair2OfAltDto } from '../../models/api-market-json-result-of-key-value-pair-2-of';

export interface DictionariesGetKladrRegionListPost$Params {
      body?: Array<string> | null
}

export function dictionariesGetKladrRegionListPost(http: HttpClient, rootUrl: string, params?: DictionariesGetKladrRegionListPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfKeyValuePair2OfAltDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetKladrRegionListPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfKeyValuePair2OfAltDto>;
    })
  );
}

dictionariesGetKladrRegionListPost.PATH = '/market/api/v1/dictionaries/kladr/search';

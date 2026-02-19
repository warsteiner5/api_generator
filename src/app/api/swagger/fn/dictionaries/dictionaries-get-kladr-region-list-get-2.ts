/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfKeyValuePair2OfAltDto } from '../../models/api-market-json-result-of-key-value-pair-2-of';

export interface DictionariesGetKladrRegionListGet2$Params {
  code: string | null;
}

export function dictionariesGetKladrRegionListGet2(http: HttpClient, rootUrl: string, params: DictionariesGetKladrRegionListGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfKeyValuePair2OfAltDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetKladrRegionListGet2.PATH, 'get');
  if (params) {
    rb.path('code', params.code, {});
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

dictionariesGetKladrRegionListGet2.PATH = '/market/api/v1/dictionaries/kladr/{code}';

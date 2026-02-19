/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfKsrValueAltDto } from '../../models/api-market-json-result-of-ksr-value';

export interface DictionariesGetKsrByCode$Params {
  code: string | null;
}

export function dictionariesGetKsrByCode(http: HttpClient, rootUrl: string, params: DictionariesGetKsrByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfKsrValueAltDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetKsrByCode.PATH, 'get');
  if (params) {
    rb.path('code', params.code, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfKsrValueAltDto>;
    })
  );
}

dictionariesGetKsrByCode.PATH = '/market/api/v1/dictionaries/ksr/getitem/{code}';

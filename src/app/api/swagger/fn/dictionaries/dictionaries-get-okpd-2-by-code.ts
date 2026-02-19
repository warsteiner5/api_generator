/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOkpd2ValueAltDto } from '../../models/api-market-json-result-of-okpd-2-value';

export interface DictionariesGetOkpd2ByCode$Params {
  code: string | null;
}

export function dictionariesGetOkpd2ByCode(http: HttpClient, rootUrl: string, params: DictionariesGetOkpd2ByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOkpd2ValueAltDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetOkpd2ByCode.PATH, 'get');
  if (params) {
    rb.path('code', params.code, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOkpd2ValueAltDto>;
    })
  );
}

dictionariesGetOkpd2ByCode.PATH = '/market/api/v1/dictionaries/okpd2/getitem/{code}';

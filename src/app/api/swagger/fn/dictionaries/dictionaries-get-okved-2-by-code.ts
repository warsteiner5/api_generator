/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOkved2Value } from '../../models/api-market-json-result-of-okved-2-value';

export interface DictionariesGetOkved2ByCode$Params {
  code: string | null;
}

export function dictionariesGetOkved2ByCode(http: HttpClient, rootUrl: string, params: DictionariesGetOkved2ByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOkved2Value>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetOkved2ByCode.PATH, 'get');
  if (params) {
    rb.path('code', params.code, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOkved2Value>;
    })
  );
}

dictionariesGetOkved2ByCode.PATH = '/bla-bla-vla/dictionaries/okved2/getitem/{code}';

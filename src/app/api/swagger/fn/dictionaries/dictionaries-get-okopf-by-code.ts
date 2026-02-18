/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOkopfDto } from '../../models/api-market-json-result-of-okopf-dto';

export interface DictionariesGetOkopfByCode$Params {
  code: string | null;
}

export function dictionariesGetOkopfByCode(http: HttpClient, rootUrl: string, params: DictionariesGetOkopfByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOkopfDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetOkopfByCode.PATH, 'get');
  if (params) {
    rb.path('code', params.code, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOkopfDto>;
    })
  );
}

dictionariesGetOkopfByCode.PATH = '/bla-bla-vla/dictionaries/okopf/{code}';

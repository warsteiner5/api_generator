/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfKtruDto } from '../../models/api-market-json-result-of-ktru-dto';

export interface DictionariesGetKtruByCode$Params {
  code: string | null;
  version: number;
}

export function dictionariesGetKtruByCode(http: HttpClient, rootUrl: string, params: DictionariesGetKtruByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfKtruDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetKtruByCode.PATH, 'get');
  if (params) {
    rb.path('code', params.code, {});
    rb.path('version', params.version, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfKtruDto>;
    })
  );
}

dictionariesGetKtruByCode.PATH = '/market/api/v1/dictionaries/ktru/{code}/{version}';

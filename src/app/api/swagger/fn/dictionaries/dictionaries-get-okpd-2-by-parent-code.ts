/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfOkpd2ValueAltDto } from '../../models/api-market-json-result-of-list-of-okpd-2-value';

export interface DictionariesGetOkpd2ByParentCode$Params {
  parentCode?: string | null;
}

export function dictionariesGetOkpd2ByParentCode(http: HttpClient, rootUrl: string, params?: DictionariesGetOkpd2ByParentCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2ValueAltDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetOkpd2ByParentCode.PATH, 'get');
  if (params) {
    rb.query('parentCode', params.parentCode, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2ValueAltDto>;
    })
  );
}

dictionariesGetOkpd2ByParentCode.PATH = '/market/api/v1/dictionaries/okpd2';

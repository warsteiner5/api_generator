/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfOkved2ValueAltDto } from '../../models/api-market-json-result-of-list-of-okved-2-value';

export interface DictionariesGetOkved2ByParentCode$Params {
  parentCode?: string | null;
}

export function dictionariesGetOkved2ByParentCode(http: HttpClient, rootUrl: string, params?: DictionariesGetOkved2ByParentCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkved2ValueAltDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetOkved2ByParentCode.PATH, 'get');
  if (params) {
    rb.query('parentCode', params.parentCode, {});
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

dictionariesGetOkved2ByParentCode.PATH = '/market/api/v1/dictionaries/okved2';

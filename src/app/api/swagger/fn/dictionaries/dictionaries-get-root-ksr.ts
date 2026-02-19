/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto } from '../../models/api-market-json-result-of-i-read-only-collection-of-ksr-value';

export interface DictionariesGetRootKsr$Params {
}

export function dictionariesGetRootKsr(http: HttpClient, rootUrl: string, params?: DictionariesGetRootKsr$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetRootKsr.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>;
    })
  );
}

dictionariesGetRootKsr.PATH = '/market/api/v1/dictionaries/ksr';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfStringAltDto } from '../../models/api-market-json-result-of-string';

export interface DealsGenerateDealNumber$Params {
}

export function dealsGenerateDealNumber(http: HttpClient, rootUrl: string, params?: DealsGenerateDealNumber$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGenerateDealNumber.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>;
    })
  );
}

dealsGenerateDealNumber.PATH = '/market/api/v1/deals/number/generate';

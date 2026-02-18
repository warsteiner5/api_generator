/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto } from '../../models/api-market-json-result-of-i-enumerable-of-finance-source-dto';

export interface FinanceSourcesGetAll$Params {
}

export function financeSourcesGetAll(http: HttpClient, rootUrl: string, params?: FinanceSourcesGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto>> {
  const rb = new RequestBuilder(rootUrl, financeSourcesGetAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto>;
    })
  );
}

financeSourcesGetAll.PATH = '/bla-bla-vla/financeSources/GetAll';

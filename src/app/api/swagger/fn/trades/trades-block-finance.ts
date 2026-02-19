/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiBlockFinanceDto } from '../../models/api-block-finance-dto';
import { ApiMarketJsonResultOfPublishApplicationResultAltDto } from '../../models/api-market-json-result-of-publish-application-result';

export interface TradesBlockFinance$Params {
      body?: ApiBlockFinanceDto | null
}

export function tradesBlockFinance(http: HttpClient, rootUrl: string, params?: TradesBlockFinance$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesBlockFinance.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>;
    })
  );
}

tradesBlockFinance.PATH = '/market/api/v1/trades/applications/block-finance';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketFullDealDto } from '../../models/api-market-json-result-of-market-full-deal-dto';

export interface DealsSetDealExecuted$Params {
  id: number;
}

export function dealsSetDealExecuted(http: HttpClient, rootUrl: string, params: DealsSetDealExecuted$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketFullDealDto>> {
  const rb = new RequestBuilder(rootUrl, dealsSetDealExecuted.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketFullDealDto>;
    })
  );
}

dealsSetDealExecuted.PATH = '/bla-bla-vla/deals/{id}/customers/execute';

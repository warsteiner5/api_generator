/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfDiscussionDto } from '../../models/api-market-json-result-of-list-of-discussion-dto';

export interface DealsGetTradeHistory$Params {
  tradeId: number;
}

export function dealsGetTradeHistory(http: HttpClient, rootUrl: string, params: DealsGetTradeHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetTradeHistory.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>;
    })
  );
}

dealsGetTradeHistory.PATH = '/bla-bla-vla/deals/GetTradeDealsHistory/{tradeId}';

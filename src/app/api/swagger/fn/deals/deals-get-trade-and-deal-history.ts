/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfDiscussionDto } from '../../models/api-market-json-result-of-list-of-discussion-dto';

export interface DealsGetTradeAndDealHistory$Params {
  tradeId: number;
  dealId: number;
}

export function dealsGetTradeAndDealHistory(http: HttpClient, rootUrl: string, params: DealsGetTradeAndDealHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetTradeAndDealHistory.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.path('dealId', params.dealId, {});
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

dealsGetTradeAndDealHistory.PATH = '/market/api/v1/deals/GetTradeDealsHistory/{tradeId}/{dealId}';

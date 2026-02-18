/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfIDiscussionHistoryDto } from '../../models/api-market-json-result-of-list-of-i-discussion-history-dto';

export interface DealsGetTradeAndDealDiscussionHistory$Params {
  dealId: number;
}

export function dealsGetTradeAndDealDiscussionHistory(http: HttpClient, rootUrl: string, params: DealsGetTradeAndDealDiscussionHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfIDiscussionHistoryDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetTradeAndDealDiscussionHistory.PATH, 'get');
  if (params) {
    rb.path('dealId', params.dealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfIDiscussionHistoryDto>;
    })
  );
}

dealsGetTradeAndDealDiscussionHistory.PATH = '/bla-bla-vla/deals/{dealId}/discussion-history';

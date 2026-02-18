/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfLong } from '../../models/api-market-json-result-of-long';

export interface TradesAddCustomerDealCommentSystemMessage$Params {
  id: number;
  chatOwnerId: number;
}

export function tradesAddCustomerDealCommentSystemMessage(http: HttpClient, rootUrl: string, params: TradesAddCustomerDealCommentSystemMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLong>> {
  const rb = new RequestBuilder(rootUrl, tradesAddCustomerDealCommentSystemMessage.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('chatOwnerId', params.chatOwnerId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfLong>;
    })
  );
}

tradesAddCustomerDealCommentSystemMessage.PATH = '/bla-bla-vla/trades/{id}/chat/{chatOwnerId}/AddCustomerDealCommentSystemMessage';

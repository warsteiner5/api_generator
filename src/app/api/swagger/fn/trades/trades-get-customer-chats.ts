/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfDiscussionTitleDto } from '../../models/api-market-json-result-of-list-of-discussion-title-dto';

export interface TradesGetCustomerChats$Params {
  id: number;
}

export function tradesGetCustomerChats(http: HttpClient, rootUrl: string, params: TradesGetCustomerChats$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionTitleDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetCustomerChats.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionTitleDto>;
    })
  );
}

tradesGetCustomerChats.PATH = '/bla-bla-vla/trades/{id}/customer-chats';

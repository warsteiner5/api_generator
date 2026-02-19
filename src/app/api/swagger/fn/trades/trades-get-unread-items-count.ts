/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIntegerAltDto } from '../../models/api-market-json-result-of-integer';

export interface TradesGetUnreadItemsCount$Params {
  id: number;
  chatId: number;
}

export function tradesGetUnreadItemsCount(http: HttpClient, rootUrl: string, params: TradesGetUnreadItemsCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetUnreadItemsCount.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('chatId', params.chatId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>;
    })
  );
}

tradesGetUnreadItemsCount.PATH = '/market/api/v1/trades/{id}/chat/{chatId}/unread/count';

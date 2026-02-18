/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDiscussionItemDtoOf } from '../../models/api-market-json-result-of-discussion-item-dto-of';

export interface TradeProtocolsGetProtocolsHistory$Params {
  tradeId: number;
}

export function tradeProtocolsGetProtocolsHistory(http: HttpClient, rootUrl: string, params: TradeProtocolsGetProtocolsHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDiscussionItemDtoOf>> {
  const rb = new RequestBuilder(rootUrl, tradeProtocolsGetProtocolsHistory.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDiscussionItemDtoOf>;
    })
  );
}

tradeProtocolsGetProtocolsHistory.PATH = '/bla-bla-vla/protocols/trades/{tradeId}/history';

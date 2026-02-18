/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBubbleDto } from '../../models/api-market-json-result-of-bubble-dto';

export interface BubblesGetTradeBubble$Params {
  tradeId: number;
}

export function bubblesGetTradeBubble(http: HttpClient, rootUrl: string, params: BubblesGetTradeBubble$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBubbleDto>> {
  const rb = new RequestBuilder(rootUrl, bubblesGetTradeBubble.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBubbleDto>;
    })
  );
}

bubblesGetTradeBubble.PATH = '/bla-bla-vla/bubbles/trade/{tradeId}';

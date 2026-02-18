/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTradePublishResult } from '../../models/api-market-json-result-of-trade-publish-result';
import { ApiTradeDtoWithSignatureAltDto } from '../../models/api-trade-dto-with-signature';

export interface TradesPublish2$Params {
      body?: ApiTradeDtoWithSignatureAltDto | null
}

export function tradesPublish2(http: HttpClient, rootUrl: string, params?: TradesPublish2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>> {
  const rb = new RequestBuilder(rootUrl, tradesPublish2.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>;
    })
  );
}

tradesPublish2.PATH = '/bla-bla-vla/trades';

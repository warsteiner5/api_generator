/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiEisIntegrationSendTradeRequestAltDto } from '../../models/api-eis-integration-send-trade-request';
import { ApiMarketJsonResultOfEisIntegrationResultDto } from '../../models/api-market-json-result-of-eis-integration-result-dto';

export interface TradesSendTradeToEis$Params {
      body?: ApiEisIntegrationSendTradeRequestAltDto | null
}

export function tradesSendTradeToEis(http: HttpClient, rootUrl: string, params?: TradesSendTradeToEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>> {
  const rb = new RequestBuilder(rootUrl, tradesSendTradeToEis.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>;
    })
  );
}

tradesSendTradeToEis.PATH = '/bla-bla-vla/trades/send-trade-to-eis';

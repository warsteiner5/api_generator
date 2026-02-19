/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiGenerateTradeProtocolRequestAltDto } from '../../models/api-generate-trade-protocol-request';
import { ApiMarketJsonResultOfGuidAltDto } from '../../models/api-market-json-result-of-guid';

export interface TradesGenerateTradeProtocol$Params {
      body?: ApiGenerateTradeProtocolRequestAltDto | null
}

export function tradesGenerateTradeProtocol(http: HttpClient, rootUrl: string, params?: TradesGenerateTradeProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGenerateTradeProtocol.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>;
    })
  );
}

tradesGenerateTradeProtocol.PATH = '/market/api/v1/trades/tradeProtocol';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiEisIntegrationSendProtocolRequestAltDto } from '../../models/api-eis-integration-send-protocol-request';
import { ApiMarketJsonResultOfEisIntegrationResultDto } from '../../models/api-market-json-result-of-eis-integration-result-dto';

export interface TradesSendProtocolToEis$Params {
      body?: ApiEisIntegrationSendProtocolRequestAltDto | null
}

export function tradesSendProtocolToEis(http: HttpClient, rootUrl: string, params?: TradesSendProtocolToEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>> {
  const rb = new RequestBuilder(rootUrl, tradesSendProtocolToEis.PATH, 'post');
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

tradesSendProtocolToEis.PATH = '/market/api/v1/trades/send-protocol-to-eis';

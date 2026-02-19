/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfEisIntegrationResultDto } from '../../models/api-market-json-result-of-eis-integration-result-dto';

export interface TradesSendTradeCancelToEis$Params {
  tradeId: number;
}

export function tradesSendTradeCancelToEis(http: HttpClient, rootUrl: string, params: TradesSendTradeCancelToEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>> {
  const rb = new RequestBuilder(rootUrl, tradesSendTradeCancelToEis.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
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

tradesSendTradeCancelToEis.PATH = '/market/api/v1/trades/sendTradeCancelToEis/{tradeId}';

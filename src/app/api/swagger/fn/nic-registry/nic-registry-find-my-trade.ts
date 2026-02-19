/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfNicRegistryTradeInfoDto } from '../../models/api-market-json-result-of-nic-registry-trade-info-dto';

export interface NicRegistryFindMyTrade$Params {
  tradeNumber: string | null;
}

export function nicRegistryFindMyTrade(http: HttpClient, rootUrl: string, params: NicRegistryFindMyTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNicRegistryTradeInfoDto>> {
  const rb = new RequestBuilder(rootUrl, nicRegistryFindMyTrade.PATH, 'get');
  if (params) {
    rb.path('tradeNumber', params.tradeNumber, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfNicRegistryTradeInfoDto>;
    })
  );
}

nicRegistryFindMyTrade.PATH = '/market/api/v1/registry/nic/trade/{tradeNumber}';

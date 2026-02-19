/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalDealTradeInfoDto } from '../../models/api-external-deal-trade-info-dto';

export interface ExternalDealsGetExternalDealTrade$Params {
  tradeId: number;
}

export function externalDealsGetExternalDealTrade(http: HttpClient, rootUrl: string, params: ExternalDealsGetExternalDealTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExternalDealTradeInfoDto>> {
  const rb = new RequestBuilder(rootUrl, externalDealsGetExternalDealTrade.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiExternalDealTradeInfoDto>;
    })
  );
}

externalDealsGetExternalDealTrade.PATH = '/market/api/v1/external-deals/trade/{tradeId}';

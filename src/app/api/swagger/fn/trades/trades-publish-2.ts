/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTradePublishResultAltDto } from '../../models/api-market-json-result-of-trade-publish-result';
import { ApiTradeDtoWithSignature } from '../../models/api-trade-dto-with-signature';

export interface TradesPublish2$Params {
      body?: ApiTradeDtoWithSignature | null
}

export function tradesPublish2(http: HttpClient, rootUrl: string, params?: TradesPublish2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesPublish2.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>;
    })
  );
}

tradesPublish2.PATH = '/market/api/v1/trades';

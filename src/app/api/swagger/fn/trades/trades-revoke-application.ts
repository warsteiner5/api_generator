/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface TradesRevokeApplication$Params {
  tradeId: number;
  applicationId: number;
}

export function tradesRevokeApplication(http: HttpClient, rootUrl: string, params: TradesRevokeApplication$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesRevokeApplication.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.path('applicationId', params.applicationId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

tradesRevokeApplication.PATH = '/bla-bla-vla/trades/{tradeId}/applications/{applicationId}/revoke';

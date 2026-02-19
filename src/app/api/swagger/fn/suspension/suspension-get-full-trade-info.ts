/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiSuspensionInfoAltDto } from '../../models/api-suspension-info';

export interface SuspensionGetFullTradeInfo$Params {
  tradeId: number;
}

export function suspensionGetFullTradeInfo(http: HttpClient, rootUrl: string, params: SuspensionGetFullTradeInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiSuspensionInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, suspensionGetFullTradeInfo.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiSuspensionInfoAltDto>;
    })
  );
}

suspensionGetFullTradeInfo.PATH = '/market/api/v1/suspension/trade/{tradeId}';

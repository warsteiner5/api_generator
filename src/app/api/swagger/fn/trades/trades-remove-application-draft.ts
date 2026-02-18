/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface TradesRemoveApplicationDraft$Params {
  applicationId: number;
}

export function tradesRemoveApplicationDraft(http: HttpClient, rootUrl: string, params: TradesRemoveApplicationDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesRemoveApplicationDraft.PATH, 'delete');
  if (params) {
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

tradesRemoveApplicationDraft.PATH = '/bla-bla-vla/trades/applications/{applicationId}';

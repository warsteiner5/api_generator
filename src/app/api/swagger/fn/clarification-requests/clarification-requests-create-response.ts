/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiClarificationResponseCreateDto } from '../../models/api-clarification-response-create-dto';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface ClarificationRequestsCreateResponse$Params {
  tradeId: number;
  clarificationRequestId: number;
      body?: ApiClarificationResponseCreateDto | null
}

export function clarificationRequestsCreateResponse(http: HttpClient, rootUrl: string, params: ClarificationRequestsCreateResponse$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, clarificationRequestsCreateResponse.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.path('clarificationRequestId', params.clarificationRequestId, {});
    rb.body(params.body, 'application/json');
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

clarificationRequestsCreateResponse.PATH = '/market/api/v1/trades/{tradeId}/clarification-requests/{clarificationRequestId}/response';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIntegerAltDto } from '../../models/api-market-json-result-of-integer';

export interface RequirementRequestsGetUnreadItemsCount$Params {
  requirementRequestId: number;
  chatId: number;
}

export function requirementRequestsGetUnreadItemsCount(http: HttpClient, rootUrl: string, params: RequirementRequestsGetUnreadItemsCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetUnreadItemsCount.PATH, 'get');
  if (params) {
    rb.path('requirementRequestId', params.requirementRequestId, {});
    rb.path('chatId', params.chatId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>;
    })
  );
}

requirementRequestsGetUnreadItemsCount.PATH = '/market/api/v1/RequirementRequests/{requirementRequestId}/chat/{chatId}/unread/count';

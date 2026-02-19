/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDiscussionDto } from '../../models/api-market-json-result-of-discussion-dto';

export interface RequirementRequestsGetLastChatItems$Params {
  requirementRequestId: number;
  chatId: number;
  lastId: number;
}

export function requirementRequestsGetLastChatItems(http: HttpClient, rootUrl: string, params: RequirementRequestsGetLastChatItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDiscussionDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetLastChatItems.PATH, 'get');
  if (params) {
    rb.path('requirementRequestId', params.requirementRequestId, {});
    rb.path('chatId', params.chatId, {});
    rb.path('lastId', params.lastId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDiscussionDto>;
    })
  );
}

requirementRequestsGetLastChatItems.PATH = '/market/api/v1/RequirementRequests/{requirementRequestId}/chat/{chatId}/{lastId}';

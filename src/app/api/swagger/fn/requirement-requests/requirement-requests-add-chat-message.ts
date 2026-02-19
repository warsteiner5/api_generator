/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDiscussionItemDto } from '../../models/api-market-json-result-of-discussion-item-dto';
import { ApiMessageAltDto } from '../../models/api-message';

export interface RequirementRequestsAddChatMessage$Params {
  requirementRequestId: number;
  chatId: number;
      body?: ApiMessageAltDto | null
}

export function requirementRequestsAddChatMessage(http: HttpClient, rootUrl: string, params: RequirementRequestsAddChatMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDiscussionItemDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsAddChatMessage.PATH, 'post');
  if (params) {
    rb.path('requirementRequestId', params.requirementRequestId, {});
    rb.path('chatId', params.chatId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDiscussionItemDto>;
    })
  );
}

requirementRequestsAddChatMessage.PATH = '/market/api/v1/RequirementRequests/{requirementRequestId}/chat/{chatId}';

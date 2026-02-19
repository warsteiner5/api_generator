/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiItemIdAmountAltDto } from '../../models/api-item-id-amount';
import { ApiMarketJsonResultOfListOfDiscussionDto } from '../../models/api-market-json-result-of-list-of-discussion-dto';

export interface RequirementRequestsGetChatItems$Params {
  requirementRequestId: number;
  chatId: number;
      body?: ApiItemIdAmountAltDto | null
}

export function requirementRequestsGetChatItems(http: HttpClient, rootUrl: string, params: RequirementRequestsGetChatItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetChatItems.PATH, 'post');
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
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>;
    })
  );
}

requirementRequestsGetChatItems.PATH = '/market/api/v1/RequirementRequests/{requirementRequestId}/chat/{chatId}/read/items';

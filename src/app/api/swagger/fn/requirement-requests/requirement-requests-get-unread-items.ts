/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfDiscussionItemDto } from '../../models/api-market-json-result-of-list-of-discussion-item-dto';

export interface RequirementRequestsGetUnreadItems$Params {
  requirementRequestId: number;
  chatId: number;
}

export function requirementRequestsGetUnreadItems(http: HttpClient, rootUrl: string, params: RequirementRequestsGetUnreadItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionItemDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetUnreadItems.PATH, 'get');
  if (params) {
    rb.path('requirementRequestId', params.requirementRequestId, {});
    rb.path('chatId', params.chatId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionItemDto>;
    })
  );
}

requirementRequestsGetUnreadItems.PATH = '/market/api/v1/RequirementRequests/{requirementRequestId}/chat/{chatId}/unread/items';

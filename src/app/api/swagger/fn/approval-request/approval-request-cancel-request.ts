/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApprovalRequestWithCommentRequestAltDto } from '../../models/api-approval-request-with-comment-request';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface ApprovalRequestCancelRequest$Params {
      body?: ApiApprovalRequestWithCommentRequestAltDto | null
}

export function approvalRequestCancelRequest(http: HttpClient, rootUrl: string, params?: ApprovalRequestCancelRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, approvalRequestCancelRequest.PATH, 'post');
  if (params) {
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

approvalRequestCancelRequest.PATH = '/bla-bla-vla/approval/Cancel';

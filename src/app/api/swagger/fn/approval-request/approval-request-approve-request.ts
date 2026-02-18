/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApprovalRequestGetOrCreateRequestAltDto } from '../../models/api-approval-request-get-or-create-request';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface ApprovalRequestApproveRequest$Params {
      body?: ApiApprovalRequestGetOrCreateRequestAltDto | null
}

export function approvalRequestApproveRequest(http: HttpClient, rootUrl: string, params?: ApprovalRequestApproveRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, approvalRequestApproveRequest.PATH, 'post');
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

approvalRequestApproveRequest.PATH = '/bla-bla-vla/approval/Approve';

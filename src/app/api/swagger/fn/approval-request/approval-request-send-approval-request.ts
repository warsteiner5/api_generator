/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApprovalRequestCreateDto } from '../../models/api-approval-request-create-dto';
import { ApiMarketJsonResultOfIntegerAltDto } from '../../models/api-market-json-result-of-integer';

export interface ApprovalRequestSendApprovalRequest$Params {
      body?: ApiApprovalRequestCreateDto | null
}

export function approvalRequestSendApprovalRequest(http: HttpClient, rootUrl: string, params?: ApprovalRequestSendApprovalRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, approvalRequestSendApprovalRequest.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

approvalRequestSendApprovalRequest.PATH = '/market/api/v1/approval/SendApprovalRequest';

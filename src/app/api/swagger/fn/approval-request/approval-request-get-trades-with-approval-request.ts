/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiEntitiesWithApprovalRequestFilterAltDto } from '../../models/api-entities-with-approval-request-filter';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-trade-with-approval-request-list-item';

export interface ApprovalRequestGetTradesWithApprovalRequest$Params {
      body?: ApiEntitiesWithApprovalRequestFilterAltDto | null
}

export function approvalRequestGetTradesWithApprovalRequest(http: HttpClient, rootUrl: string, params?: ApprovalRequestGetTradesWithApprovalRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto>> {
  const rb = new RequestBuilder(rootUrl, approvalRequestGetTradesWithApprovalRequest.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto>;
    })
  );
}

approvalRequestGetTradesWithApprovalRequest.PATH = '/market/api/v1/approval/Trades';

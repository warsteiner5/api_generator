/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { approvalRequestApproveRequest } from '../fn/approval-request/approval-request-approve-request';
import { ApprovalRequestApproveRequest$Params } from '../fn/approval-request/approval-request-approve-request';
import { approvalRequestCancelRequest } from '../fn/approval-request/approval-request-cancel-request';
import { ApprovalRequestCancelRequest$Params } from '../fn/approval-request/approval-request-cancel-request';
import { approvalRequestGetByEntityIdWithType } from '../fn/approval-request/approval-request-get-by-entity-id-with-type';
import { ApprovalRequestGetByEntityIdWithType$Params } from '../fn/approval-request/approval-request-get-by-entity-id-with-type';
import { approvalRequestGetTradesWithApprovalRequest } from '../fn/approval-request/approval-request-get-trades-with-approval-request';
import { ApprovalRequestGetTradesWithApprovalRequest$Params } from '../fn/approval-request/approval-request-get-trades-with-approval-request';
import { approvalRequestRejectRequest } from '../fn/approval-request/approval-request-reject-request';
import { ApprovalRequestRejectRequest$Params } from '../fn/approval-request/approval-request-reject-request';
import { approvalRequestSendApprovalRequest } from '../fn/approval-request/approval-request-send-approval-request';
import { ApprovalRequestSendApprovalRequest$Params } from '../fn/approval-request/approval-request-send-approval-request';
import { ApiMarketJsonResultOfApprovalRequestViewDto } from '../models/api-market-json-result-of-approval-request-view-dto';
import { ApiMarketJsonResultOfInteger } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-trade-with-approval-request-list-item';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class ApprovalRequestApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `approvalRequestSendApprovalRequest()` */
  static readonly ApprovalRequestSendApprovalRequestPath = '/bla-bla-vla/approval/SendApprovalRequest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approvalRequestSendApprovalRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestSendApprovalRequest$Response(params?: ApprovalRequestSendApprovalRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return approvalRequestSendApprovalRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approvalRequestSendApprovalRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestSendApprovalRequest(params?: ApprovalRequestSendApprovalRequest$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.approvalRequestSendApprovalRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `approvalRequestGetByEntityIdWithType()` */
  static readonly ApprovalRequestGetByEntityIdWithTypePath = '/bla-bla-vla/approval/GetByEntityIdWithType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approvalRequestGetByEntityIdWithType()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestGetByEntityIdWithType$Response(params?: ApprovalRequestGetByEntityIdWithType$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfApprovalRequestViewDto>> {
    return approvalRequestGetByEntityIdWithType(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approvalRequestGetByEntityIdWithType$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestGetByEntityIdWithType(params?: ApprovalRequestGetByEntityIdWithType$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfApprovalRequestViewDto> {
    return this.approvalRequestGetByEntityIdWithType$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfApprovalRequestViewDto>): ApiMarketJsonResultOfApprovalRequestViewDto => r.body)
    );
  }

  /** Path part for operation `approvalRequestCancelRequest()` */
  static readonly ApprovalRequestCancelRequestPath = '/bla-bla-vla/approval/Cancel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approvalRequestCancelRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestCancelRequest$Response(params?: ApprovalRequestCancelRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return approvalRequestCancelRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approvalRequestCancelRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestCancelRequest(params?: ApprovalRequestCancelRequest$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.approvalRequestCancelRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `approvalRequestApproveRequest()` */
  static readonly ApprovalRequestApproveRequestPath = '/bla-bla-vla/approval/Approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approvalRequestApproveRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestApproveRequest$Response(params?: ApprovalRequestApproveRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return approvalRequestApproveRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approvalRequestApproveRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestApproveRequest(params?: ApprovalRequestApproveRequest$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.approvalRequestApproveRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `approvalRequestRejectRequest()` */
  static readonly ApprovalRequestRejectRequestPath = '/bla-bla-vla/approval/Reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approvalRequestRejectRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestRejectRequest$Response(params?: ApprovalRequestRejectRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return approvalRequestRejectRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approvalRequestRejectRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestRejectRequest(params?: ApprovalRequestRejectRequest$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.approvalRequestRejectRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `approvalRequestGetTradesWithApprovalRequest()` */
  static readonly ApprovalRequestGetTradesWithApprovalRequestPath = '/bla-bla-vla/approval/Trades';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approvalRequestGetTradesWithApprovalRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestGetTradesWithApprovalRequest$Response(params?: ApprovalRequestGetTradesWithApprovalRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem>> {
    return approvalRequestGetTradesWithApprovalRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approvalRequestGetTradesWithApprovalRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approvalRequestGetTradesWithApprovalRequest(params?: ApprovalRequestGetTradesWithApprovalRequest$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem> {
    return this.approvalRequestGetTradesWithApprovalRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem>): ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem => r.body)
    );
  }

}

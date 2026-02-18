/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { clarificationRequestsCreateRequest } from '../fn/clarification-requests/clarification-requests-create-request';
import { ClarificationRequestsCreateRequest$Params } from '../fn/clarification-requests/clarification-requests-create-request';
import { clarificationRequestsCreateResponse } from '../fn/clarification-requests/clarification-requests-create-response';
import { ClarificationRequestsCreateResponse$Params } from '../fn/clarification-requests/clarification-requests-create-response';
import { clarificationRequestsGetClarificationRequests } from '../fn/clarification-requests/clarification-requests-get-clarification-requests';
import { ClarificationRequestsGetClarificationRequests$Params } from '../fn/clarification-requests/clarification-requests-get-clarification-requests';
import { clarificationRequestsGetTradeParticipantList } from '../fn/clarification-requests/clarification-requests-get-trade-participant-list';
import { ClarificationRequestsGetTradeParticipantList$Params } from '../fn/clarification-requests/clarification-requests-get-trade-participant-list';
import { ApiMarketJsonResultOfClarificationRequestsDto } from '../models/api-market-json-result-of-clarification-requests-dto';
import { ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto } from '../models/api-market-json-result-of-i-enumerable-of-clarification-participant-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class ClarificationRequestsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `clarificationRequestsGetClarificationRequests()` */
  static readonly ClarificationRequestsGetClarificationRequestsPath = '/bla-bla-vla/trades/{tradeId}/clarification-requests';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clarificationRequestsGetClarificationRequests()` instead.
   *
   * This method doesn't expect any request body.
   */
  clarificationRequestsGetClarificationRequests$Response(params: ClarificationRequestsGetClarificationRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfClarificationRequestsDto>> {
    return clarificationRequestsGetClarificationRequests(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clarificationRequestsGetClarificationRequests$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clarificationRequestsGetClarificationRequests(params: ClarificationRequestsGetClarificationRequests$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfClarificationRequestsDto> {
    return this.clarificationRequestsGetClarificationRequests$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfClarificationRequestsDto>): ApiMarketJsonResultOfClarificationRequestsDto => r.body)
    );
  }

  /** Path part for operation `clarificationRequestsCreateRequest()` */
  static readonly ClarificationRequestsCreateRequestPath = '/bla-bla-vla/trades/{tradeId}/clarification-requests';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clarificationRequestsCreateRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clarificationRequestsCreateRequest$Response(params: ClarificationRequestsCreateRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return clarificationRequestsCreateRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clarificationRequestsCreateRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clarificationRequestsCreateRequest(params: ClarificationRequestsCreateRequest$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.clarificationRequestsCreateRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `clarificationRequestsCreateResponse()` */
  static readonly ClarificationRequestsCreateResponsePath = '/bla-bla-vla/trades/{tradeId}/clarification-requests/{clarificationRequestId}/response';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clarificationRequestsCreateResponse()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clarificationRequestsCreateResponse$Response(params: ClarificationRequestsCreateResponse$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return clarificationRequestsCreateResponse(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clarificationRequestsCreateResponse$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clarificationRequestsCreateResponse(params: ClarificationRequestsCreateResponse$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.clarificationRequestsCreateResponse$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `clarificationRequestsGetTradeParticipantList()` */
  static readonly ClarificationRequestsGetTradeParticipantListPath = '/bla-bla-vla/trades/{tradeId}/clarification-requests/participants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clarificationRequestsGetTradeParticipantList()` instead.
   *
   * This method doesn't expect any request body.
   */
  clarificationRequestsGetTradeParticipantList$Response(params: ClarificationRequestsGetTradeParticipantList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto>> {
    return clarificationRequestsGetTradeParticipantList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clarificationRequestsGetTradeParticipantList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clarificationRequestsGetTradeParticipantList(params: ClarificationRequestsGetTradeParticipantList$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto> {
    return this.clarificationRequestsGetTradeParticipantList$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto>): ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto => r.body)
    );
  }

}

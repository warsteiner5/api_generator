/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { feedbackAddFeedback } from '../fn/feedback/feedback-add-feedback';
import { FeedbackAddFeedback$Params } from '../fn/feedback/feedback-add-feedback';
import { feedbackGetPersonalDataAgreement } from '../fn/feedback/feedback-get-personal-data-agreement';
import { FeedbackGetPersonalDataAgreement$Params } from '../fn/feedback/feedback-get-personal-data-agreement';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class FeedbackApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `feedbackAddFeedback()` */
  static readonly FeedbackAddFeedbackPath = '/bla-bla-vla/feedback/submit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `feedbackAddFeedback()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  feedbackAddFeedback$Response(params?: FeedbackAddFeedback$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return feedbackAddFeedback(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `feedbackAddFeedback$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  feedbackAddFeedback(params?: FeedbackAddFeedback$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.feedbackAddFeedback$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `feedbackGetPersonalDataAgreement()` */
  static readonly FeedbackGetPersonalDataAgreementPath = '/bla-bla-vla/feedback/agreement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `feedbackGetPersonalDataAgreement()` instead.
   *
   * This method doesn't expect any request body.
   */
  feedbackGetPersonalDataAgreement$Response(params?: FeedbackGetPersonalDataAgreement$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return feedbackGetPersonalDataAgreement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `feedbackGetPersonalDataAgreement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  feedbackGetPersonalDataAgreement(params?: FeedbackGetPersonalDataAgreement$Params, context?: HttpContext): Observable<string> {
    return this.feedbackGetPersonalDataAgreement$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}

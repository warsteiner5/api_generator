/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfOkServiceBriefReportDto } from '../models/api-market-json-result-of-ok-service-brief-report-dto';
import { ApiMarketJsonResultOfOkServiceBriefReportDtoOf } from '../models/api-market-json-result-of-ok-service-brief-report-dto-of';
import { okGet } from '../fn/ok/ok-get';
import { OkGet$Params } from '../fn/ok/ok-get';
import { okGetBriefList } from '../fn/ok/ok-get-brief-list';
import { OkGetBriefList$Params } from '../fn/ok/ok-get-brief-list';
import { okGetReport } from '../fn/ok/ok-get-report';
import { OkGetReport$Params } from '../fn/ok/ok-get-report';
import { okSendReportOnEmail } from '../fn/ok/ok-send-report-on-email';
import { OkSendReportOnEmail$Params } from '../fn/ok/ok-send-report-on-email';

@Injectable({ providedIn: 'root' })
export class OkApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `okGet()` */
  static readonly OkGetPath = '/bla-bla-vla/okservice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `okGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  okGet$Response(params: OkGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOkServiceBriefReportDto>> {
    return okGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `okGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  okGet(params: OkGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOkServiceBriefReportDto> {
    return this.okGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOkServiceBriefReportDto>): ApiMarketJsonResultOfOkServiceBriefReportDto => r.body)
    );
  }

  /** Path part for operation `okGetBriefList()` */
  static readonly OkGetBriefListPath = '/bla-bla-vla/okservice/brieflist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `okGetBriefList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  okGetBriefList$Response(params?: OkGetBriefList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOkServiceBriefReportDtoOf>> {
    return okGetBriefList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `okGetBriefList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  okGetBriefList(params?: OkGetBriefList$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOkServiceBriefReportDtoOf> {
    return this.okGetBriefList$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOkServiceBriefReportDtoOf>): ApiMarketJsonResultOfOkServiceBriefReportDtoOf => r.body)
    );
  }

  /** Path part for operation `okGetReport()` */
  static readonly OkGetReportPath = '/bla-bla-vla/okservice/report';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `okGetReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  okGetReport$Response(params: OkGetReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return okGetReport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `okGetReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  okGetReport(params: OkGetReport$Params, context?: HttpContext): Observable<Blob> {
    return this.okGetReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `okSendReportOnEmail()` */
  static readonly OkSendReportOnEmailPath = '/bla-bla-vla/okservice/sendReportToEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `okSendReportOnEmail()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  okSendReportOnEmail$Response(params?: OkSendReportOnEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return okSendReportOnEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `okSendReportOnEmail$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  okSendReportOnEmail(params?: OkSendReportOnEmail$Params, context?: HttpContext): Observable<Blob> {
    return this.okSendReportOnEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { dashboardGetAggregationInfo } from '../fn/dashboard/dashboard-get-aggregation-info';
import { DashboardGetAggregationInfo$Params } from '../fn/dashboard/dashboard-get-aggregation-info';
import { dashboardGetAggregationInfoByDaysInMonth } from '../fn/dashboard/dashboard-get-aggregation-info-by-days-in-month';
import { DashboardGetAggregationInfoByDaysInMonth$Params } from '../fn/dashboard/dashboard-get-aggregation-info-by-days-in-month';
import { dashboardGetAggregationInfoByMonth } from '../fn/dashboard/dashboard-get-aggregation-info-by-month';
import { DashboardGetAggregationInfoByMonth$Params } from '../fn/dashboard/dashboard-get-aggregation-info-by-month';
import { dashboardGetAggregationInfoByStatus } from '../fn/dashboard/dashboard-get-aggregation-info-by-status';
import { DashboardGetAggregationInfoByStatus$Params } from '../fn/dashboard/dashboard-get-aggregation-info-by-status';
import { dashboardGetAggregationInfoByStatusForUser } from '../fn/dashboard/dashboard-get-aggregation-info-by-status-for-user';
import { DashboardGetAggregationInfoByStatusForUser$Params } from '../fn/dashboard/dashboard-get-aggregation-info-by-status-for-user';
import { ApiMarketJsonResultOfListOfMarketOfferDatesResultDto } from '../models/api-market-json-result-of-list-of-market-offer-dates-result-dto';
import { ApiMarketJsonResultOfListOfMarketOfferStatusResultDto } from '../models/api-market-json-result-of-list-of-market-offer-status-result-dto';

@Injectable({ providedIn: 'root' })
export class DashboardApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `dashboardGetAggregationInfo()` */
  static readonly DashboardGetAggregationInfoPath = '/bla-bla-vla/dashboard/agInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardGetAggregationInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAggregationInfo$Response(params?: DashboardGetAggregationInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto>> {
    return dashboardGetAggregationInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dashboardGetAggregationInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAggregationInfo(params?: DashboardGetAggregationInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto> {
    return this.dashboardGetAggregationInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto>): ApiMarketJsonResultOfListOfMarketOfferStatusResultDto => r.body)
    );
  }

  /** Path part for operation `dashboardGetAggregationInfoByStatus()` */
  static readonly DashboardGetAggregationInfoByStatusPath = '/bla-bla-vla/dashboard/agInfo/{guid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardGetAggregationInfoByStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAggregationInfoByStatus$Response(params: DashboardGetAggregationInfoByStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto>> {
    return dashboardGetAggregationInfoByStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dashboardGetAggregationInfoByStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAggregationInfoByStatus(params: DashboardGetAggregationInfoByStatus$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto> {
    return this.dashboardGetAggregationInfoByStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto>): ApiMarketJsonResultOfListOfMarketOfferStatusResultDto => r.body)
    );
  }

  /** Path part for operation `dashboardGetAggregationInfoByStatusForUser()` */
  static readonly DashboardGetAggregationInfoByStatusForUserPath = '/bla-bla-vla/dashboard/agInfo/user/{guid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardGetAggregationInfoByStatusForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAggregationInfoByStatusForUser$Response(params: DashboardGetAggregationInfoByStatusForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto>> {
    return dashboardGetAggregationInfoByStatusForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dashboardGetAggregationInfoByStatusForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAggregationInfoByStatusForUser(params: DashboardGetAggregationInfoByStatusForUser$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto> {
    return this.dashboardGetAggregationInfoByStatusForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto>): ApiMarketJsonResultOfListOfMarketOfferStatusResultDto => r.body)
    );
  }

  /** Path part for operation `dashboardGetAggregationInfoByMonth()` */
  static readonly DashboardGetAggregationInfoByMonthPath = '/bla-bla-vla/dashboard/agInfo/months/{guid}/{year}/{fromMonth}/{toMonth}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardGetAggregationInfoByMonth()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAggregationInfoByMonth$Response(params: DashboardGetAggregationInfoByMonth$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto>> {
    return dashboardGetAggregationInfoByMonth(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dashboardGetAggregationInfoByMonth$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAggregationInfoByMonth(params: DashboardGetAggregationInfoByMonth$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto> {
    return this.dashboardGetAggregationInfoByMonth$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto>): ApiMarketJsonResultOfListOfMarketOfferStatusResultDto => r.body)
    );
  }

  /** Path part for operation `dashboardGetAggregationInfoByDaysInMonth()` */
  static readonly DashboardGetAggregationInfoByDaysInMonthPath = '/bla-bla-vla/dashboard/agInfo/date/{guid}/{year}/{month}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardGetAggregationInfoByDaysInMonth()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAggregationInfoByDaysInMonth$Response(params: DashboardGetAggregationInfoByDaysInMonth$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferDatesResultDto>> {
    return dashboardGetAggregationInfoByDaysInMonth(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dashboardGetAggregationInfoByDaysInMonth$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAggregationInfoByDaysInMonth(params: DashboardGetAggregationInfoByDaysInMonth$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketOfferDatesResultDto> {
    return this.dashboardGetAggregationInfoByDaysInMonth$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferDatesResultDto>): ApiMarketJsonResultOfListOfMarketOfferDatesResultDto => r.body)
    );
  }

}

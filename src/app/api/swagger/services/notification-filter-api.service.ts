/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfOrganizationShortInfoDtoOf } from '../models/api-market-json-result-of-organization-short-info-dto-of';
import { notificationFilterGetPossibleOrganizationsToUseInFilter } from '../fn/notification-filter/notification-filter-get-possible-organizations-to-use-in-filter';
import { NotificationFilterGetPossibleOrganizationsToUseInFilter$Params } from '../fn/notification-filter/notification-filter-get-possible-organizations-to-use-in-filter';

@Injectable({ providedIn: 'root' })
export class NotificationFilterApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `notificationFilterGetPossibleOrganizationsToUseInFilter()` */
  static readonly NotificationFilterGetPossibleOrganizationsToUseInFilterPath = '/bla-bla-vla/notifications/filters/my/possible-organizations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationFilterGetPossibleOrganizationsToUseInFilter()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationFilterGetPossibleOrganizationsToUseInFilter$Response(params?: NotificationFilterGetPossibleOrganizationsToUseInFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizationShortInfoDtoOf>> {
    return notificationFilterGetPossibleOrganizationsToUseInFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationFilterGetPossibleOrganizationsToUseInFilter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationFilterGetPossibleOrganizationsToUseInFilter(params?: NotificationFilterGetPossibleOrganizationsToUseInFilter$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOrganizationShortInfoDtoOf> {
    return this.notificationFilterGetPossibleOrganizationsToUseInFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOrganizationShortInfoDtoOf>): ApiMarketJsonResultOfOrganizationShortInfoDtoOf => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exportByUsersGetUserCounters } from '../fn/export-by-users/export-by-users-get-user-counters';
import { ExportByUsersGetUserCounters$Params } from '../fn/export-by-users/export-by-users-get-user-counters';
import { ApiMarketJsonResultOfUserCountersDto } from '../models/api-market-json-result-of-user-counters-dto';

@Injectable({ providedIn: 'root' })
export class ExportByUsersApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exportByUsersGetUserCounters()` */
  static readonly ExportByUsersGetUserCountersPath = '/market/api/v1/export-by/users/counters';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportByUsersGetUserCounters()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportByUsersGetUserCounters$Response(params?: ExportByUsersGetUserCounters$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfUserCountersDto>> {
    return exportByUsersGetUserCounters(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exportByUsersGetUserCounters$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportByUsersGetUserCounters(params?: ExportByUsersGetUserCounters$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfUserCountersDto> {
    return this.exportByUsersGetUserCounters$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfUserCountersDto>): ApiMarketJsonResultOfUserCountersDto => r.body)
    );
  }

}

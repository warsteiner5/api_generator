/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfDateTimeAltDto } from '../models/api-market-json-result-of-date-time';
import { timeGetServerTimeUtc } from '../fn/time/time-get-server-time-utc';
import { TimeGetServerTimeUtc$Params } from '../fn/time/time-get-server-time-utc';

@Injectable({ providedIn: 'root' })
export class TimeApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `timeGetServerTimeUtc()` */
  static readonly TimeGetServerTimeUtcPath = '/market/api/v1/time/now';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `timeGetServerTimeUtc()` instead.
   *
   * This method doesn't expect any request body.
   */
  timeGetServerTimeUtc$Response(params?: TimeGetServerTimeUtc$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDateTimeAltDto>> {
    return timeGetServerTimeUtc(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `timeGetServerTimeUtc$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  timeGetServerTimeUtc(params?: TimeGetServerTimeUtc$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDateTimeAltDto> {
    return this.timeGetServerTimeUtc$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDateTimeAltDto>): ApiMarketJsonResultOfDateTimeAltDto => r.body)
    );
  }

}

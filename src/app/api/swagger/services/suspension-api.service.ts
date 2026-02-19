/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { suspensionGetFullTradeInfo } from '../fn/suspension/suspension-get-full-trade-info';
import { SuspensionGetFullTradeInfo$Params } from '../fn/suspension/suspension-get-full-trade-info';
import { ApiSuspensionInfoAltDto } from '../models/api-suspension-info';

@Injectable({ providedIn: 'root' })
export class SuspensionApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `suspensionGetFullTradeInfo()` */
  static readonly SuspensionGetFullTradeInfoPath = '/market/api/v1/suspension/trade/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suspensionGetFullTradeInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  suspensionGetFullTradeInfo$Response(params: SuspensionGetFullTradeInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiSuspensionInfoAltDto>> {
    return suspensionGetFullTradeInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `suspensionGetFullTradeInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suspensionGetFullTradeInfo(params: SuspensionGetFullTradeInfo$Params, context?: HttpContext): Observable<ApiSuspensionInfoAltDto> {
    return this.suspensionGetFullTradeInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiSuspensionInfoAltDto>): ApiSuspensionInfoAltDto => r.body)
    );
  }

}

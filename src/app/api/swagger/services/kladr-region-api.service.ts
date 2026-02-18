/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { kladrRegionGet } from '../fn/kladr-region/kladr-region-get';
import { KladrRegionGet$Params } from '../fn/kladr-region/kladr-region-get';

@Injectable({ providedIn: 'root' })
export class KladrRegionApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `kladrRegionGet()` */
  static readonly KladrRegionGetPath = '/api';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kladrRegionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  kladrRegionGet$Response(params?: KladrRegionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return kladrRegionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `kladrRegionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  kladrRegionGet(params?: KladrRegionGet$Params, context?: HttpContext): Observable<Blob> {
    return this.kladrRegionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

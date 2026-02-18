/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { regionGet } from '../fn/region/region-get';
import { RegionGet$Params } from '../fn/region/region-get';

@Injectable({ providedIn: 'root' })
export class RegionApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `regionGet()` */
  static readonly RegionGetPath = '/api/Region';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  regionGet$Response(params?: RegionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return regionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  regionGet(params?: RegionGet$Params, context?: HttpContext): Observable<Blob> {
    return this.regionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

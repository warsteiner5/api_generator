/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { okeiGet } from '../fn/okei/okei-get';
import { OkeiGet$Params } from '../fn/okei/okei-get';

@Injectable({ providedIn: 'root' })
export class OkeiApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `okeiGet()` */
  static readonly OkeiGetPath = '/api/Okei';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `okeiGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  okeiGet$Response(params?: OkeiGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return okeiGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `okeiGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  okeiGet(params?: OkeiGet$Params, context?: HttpContext): Observable<Blob> {
    return this.okeiGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

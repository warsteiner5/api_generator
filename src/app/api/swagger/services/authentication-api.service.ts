/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authenticationAuthenticateIn223PublicApi } from '../fn/authentication/authentication-authenticate-in-223-public-api';
import { AuthenticationAuthenticateIn223PublicApi$Params } from '../fn/authentication/authentication-authenticate-in-223-public-api';

@Injectable({ providedIn: 'root' })
export class AuthenticationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authenticationAuthenticateIn223PublicApi()` */
  static readonly AuthenticationAuthenticateIn223PublicApiPath = '/api/Authentication/AuthenticateIn223PublicApi';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticationAuthenticateIn223PublicApi()` instead.
   *
   * This method doesn't expect any request body.
   */
  authenticationAuthenticateIn223PublicApi$Response(params: AuthenticationAuthenticateIn223PublicApi$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return authenticationAuthenticateIn223PublicApi(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticationAuthenticateIn223PublicApi$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authenticationAuthenticateIn223PublicApi(params: AuthenticationAuthenticateIn223PublicApi$Params, context?: HttpContext): Observable<Blob> {
    return this.authenticationAuthenticateIn223PublicApi$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

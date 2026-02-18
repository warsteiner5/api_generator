/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { declarationGet } from '../fn/declaration/declaration-get';
import { DeclarationGet$Params } from '../fn/declaration/declaration-get';

@Injectable({ providedIn: 'root' })
export class DeclarationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `declarationGet()` */
  static readonly DeclarationGetPath = '/api/Declaration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `declarationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  declarationGet$Response(params?: DeclarationGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return declarationGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `declarationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  declarationGet(params?: DeclarationGet$Params, context?: HttpContext): Observable<Blob> {
    return this.declarationGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

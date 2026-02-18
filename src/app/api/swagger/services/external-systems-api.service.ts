/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { externalSystemsGetExternalSystemById } from '../fn/external-systems/external-systems-get-external-system-by-id';
import { ExternalSystemsGetExternalSystemById$Params } from '../fn/external-systems/external-systems-get-external-system-by-id';
import { externalSystemsGetExternalSystemById2 } from '../fn/external-systems/external-systems-get-external-system-by-id-2';
import { ExternalSystemsGetExternalSystemById2$Params } from '../fn/external-systems/external-systems-get-external-system-by-id-2';

@Injectable({ providedIn: 'root' })
export class ExternalSystemsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `externalSystemsGetExternalSystemById()` */
  static readonly ExternalSystemsGetExternalSystemByIdPath = '/api/ExternalSystems/identity/{key}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalSystemsGetExternalSystemById()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalSystemsGetExternalSystemById$Response(params: ExternalSystemsGetExternalSystemById$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return externalSystemsGetExternalSystemById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalSystemsGetExternalSystemById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalSystemsGetExternalSystemById(params: ExternalSystemsGetExternalSystemById$Params, context?: HttpContext): Observable<Blob> {
    return this.externalSystemsGetExternalSystemById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `externalSystemsGetExternalSystemById2()` */
  static readonly ExternalSystemsGetExternalSystemById2Path = '/api/ExternalSystems/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalSystemsGetExternalSystemById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalSystemsGetExternalSystemById2$Response(params: ExternalSystemsGetExternalSystemById2$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return externalSystemsGetExternalSystemById2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalSystemsGetExternalSystemById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalSystemsGetExternalSystemById2(params: ExternalSystemsGetExternalSystemById2$Params, context?: HttpContext): Observable<Blob> {
    return this.externalSystemsGetExternalSystemById2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { signedOutOfEpReasonsGetSignedOutOfEpReasons } from '../fn/signed-out-of-ep-reasons/signed-out-of-ep-reasons-get-signed-out-of-ep-reasons';
import { SignedOutOfEpReasonsGetSignedOutOfEpReasons$Params } from '../fn/signed-out-of-ep-reasons/signed-out-of-ep-reasons-get-signed-out-of-ep-reasons';

@Injectable({ providedIn: 'root' })
export class SignedOutOfEpReasonsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `signedOutOfEpReasonsGetSignedOutOfEpReasons()` */
  static readonly SignedOutOfEpReasonsGetSignedOutOfEpReasonsPath = '/api/signedoutofepreasons';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signedOutOfEpReasonsGetSignedOutOfEpReasons()` instead.
   *
   * This method doesn't expect any request body.
   */
  signedOutOfEpReasonsGetSignedOutOfEpReasons$Response(params: SignedOutOfEpReasonsGetSignedOutOfEpReasons$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return signedOutOfEpReasonsGetSignedOutOfEpReasons(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signedOutOfEpReasonsGetSignedOutOfEpReasons$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signedOutOfEpReasonsGetSignedOutOfEpReasons(params: SignedOutOfEpReasonsGetSignedOutOfEpReasons$Params, context?: HttpContext): Observable<Blob> {
    return this.signedOutOfEpReasonsGetSignedOutOfEpReasons$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

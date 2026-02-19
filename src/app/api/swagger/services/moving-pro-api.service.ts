/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { movingProTransitionToMovingPro } from '../fn/moving-pro/moving-pro-transition-to-moving-pro';
import { MovingProTransitionToMovingPro$Params } from '../fn/moving-pro/moving-pro-transition-to-moving-pro';

@Injectable({ providedIn: 'root' })
export class MovingProApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `movingProTransitionToMovingPro()` */
  static readonly MovingProTransitionToMovingProPath = '/market/api/v1/moving-pro/transition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movingProTransitionToMovingPro()` instead.
   *
   * This method doesn't expect any request body.
   */
  movingProTransitionToMovingPro$Response(params?: MovingProTransitionToMovingPro$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return movingProTransitionToMovingPro(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movingProTransitionToMovingPro$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  movingProTransitionToMovingPro(params?: MovingProTransitionToMovingPro$Params, context?: HttpContext): Observable<Blob> {
    return this.movingProTransitionToMovingPro$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

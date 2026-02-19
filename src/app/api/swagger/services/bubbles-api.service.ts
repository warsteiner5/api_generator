/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { bubblesGetTradeBubble } from '../fn/bubbles/bubbles-get-trade-bubble';
import { BubblesGetTradeBubble$Params } from '../fn/bubbles/bubbles-get-trade-bubble';
import { ApiMarketJsonResultOfBubbleDto } from '../models/api-market-json-result-of-bubble-dto';

@Injectable({ providedIn: 'root' })
export class BubblesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `bubblesGetTradeBubble()` */
  static readonly BubblesGetTradeBubblePath = '/market/api/v1/bubbles/trade/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bubblesGetTradeBubble()` instead.
   *
   * This method doesn't expect any request body.
   */
  bubblesGetTradeBubble$Response(params: BubblesGetTradeBubble$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBubbleDto>> {
    return bubblesGetTradeBubble(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `bubblesGetTradeBubble$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bubblesGetTradeBubble(params: BubblesGetTradeBubble$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBubbleDto> {
    return this.bubblesGetTradeBubble$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBubbleDto>): ApiMarketJsonResultOfBubbleDto => r.body)
    );
  }

}

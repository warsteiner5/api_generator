/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { biddingNewGetInfo } from '../fn/bidding-new/bidding-new-get-info';
import { BiddingNewGetInfo$Params } from '../fn/bidding-new/bidding-new-get-info';
import { ApiMarketJsonResultOfBiddingInfo } from '../models/api-market-json-result-of-bidding-info';

@Injectable({ providedIn: 'root' })
export class BiddingNewApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `biddingNewGetInfo()` */
  static readonly BiddingNewGetInfoPath = '/bla-bla-vla/bidding-new/trade/{tradeGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `biddingNewGetInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  biddingNewGetInfo$Response(params: BiddingNewGetInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBiddingInfo>> {
    return biddingNewGetInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `biddingNewGetInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  biddingNewGetInfo(params: BiddingNewGetInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBiddingInfo> {
    return this.biddingNewGetInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBiddingInfo>): ApiMarketJsonResultOfBiddingInfo => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { biddingGetInfo } from '../fn/bidding/bidding-get-info';
import { BiddingGetInfo$Params } from '../fn/bidding/bidding-get-info';
import { ApiMarketJsonResultOfBiddingInfo } from '../models/api-market-json-result-of-bidding-info';

@Injectable({ providedIn: 'root' })
export class BiddingApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `biddingGetInfo()` */
  static readonly BiddingGetInfoPath = '/bla-bla-vla/bidding/trade/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `biddingGetInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  biddingGetInfo$Response(params: BiddingGetInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBiddingInfo>> {
    return biddingGetInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `biddingGetInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  biddingGetInfo(params: BiddingGetInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBiddingInfo> {
    return this.biddingGetInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBiddingInfo>): ApiMarketJsonResultOfBiddingInfo => r.body)
    );
  }

}

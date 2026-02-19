/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { biddingDataGetInfo } from '../fn/bidding-data/bidding-data-get-info';
import { BiddingDataGetInfo$Params } from '../fn/bidding-data/bidding-data-get-info';
import { ApiMarketJsonResultOfCompletedBiddingInfoAltDto } from '../models/api-market-json-result-of-completed-bidding-info';

@Injectable({ providedIn: 'root' })
export class BiddingDataApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `biddingDataGetInfo()` */
  static readonly BiddingDataGetInfoPath = '/market/api/v1/bidding-data/trade/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `biddingDataGetInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  biddingDataGetInfo$Response(params: BiddingDataGetInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCompletedBiddingInfoAltDto>> {
    return biddingDataGetInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `biddingDataGetInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  biddingDataGetInfo(params: BiddingDataGetInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCompletedBiddingInfoAltDto> {
    return this.biddingDataGetInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCompletedBiddingInfoAltDto>): ApiMarketJsonResultOfCompletedBiddingInfoAltDto => r.body)
    );
  }

}

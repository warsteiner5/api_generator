/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { bidCreate } from '../fn/bid/bid-create';
import { BidCreate$Params } from '../fn/bid/bid-create';
import { bidGetBids } from '../fn/bid/bid-get-bids';
import { BidGetBids$Params } from '../fn/bid/bid-get-bids';
import { bidSign } from '../fn/bid/bid-sign';
import { BidSign$Params } from '../fn/bid/bid-sign';
import { ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOfAltDto } from '../models/api-market-json-result-of-market-pagination-result-of-bid-info-of';
import { ApiMarketJsonResultOfSignBidResponseAltDto } from '../models/api-market-json-result-of-sign-bid-response';

@Injectable({ providedIn: 'root' })
export class BidApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `bidSign()` */
  static readonly BidSignPath = '/market/api/v1/bid/sign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bidSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bidSign$Response(params?: BidSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSignBidResponseAltDto>> {
    return bidSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `bidSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bidSign(params?: BidSign$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSignBidResponseAltDto> {
    return this.bidSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSignBidResponseAltDto>): ApiMarketJsonResultOfSignBidResponseAltDto => r.body)
    );
  }

  /** Path part for operation `bidCreate()` */
  static readonly BidCreatePath = '/market/api/v1/bid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bidCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bidCreate$Response(params?: BidCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return bidCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `bidCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bidCreate(params?: BidCreate$Params, context?: HttpContext): Observable<Blob> {
    return this.bidCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `bidGetBids()` */
  static readonly BidGetBidsPath = '/market/api/v1/bid/trade/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bidGetBids()` instead.
   *
   * This method doesn't expect any request body.
   */
  bidGetBids$Response(params: BidGetBids$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOfAltDto>> {
    return bidGetBids(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `bidGetBids$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bidGetBids(params: BidGetBids$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOfAltDto> {
    return this.bidGetBids$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOfAltDto>): ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOfAltDto => r.body)
    );
  }

}

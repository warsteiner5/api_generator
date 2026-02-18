/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { bidNewCreate } from '../fn/bid-new/bid-new-create';
import { BidNewCreate$Params } from '../fn/bid-new/bid-new-create';
import { bidNewGetBids } from '../fn/bid-new/bid-new-get-bids';
import { BidNewGetBids$Params } from '../fn/bid-new/bid-new-get-bids';
import { bidNewSign } from '../fn/bid-new/bid-new-sign';
import { BidNewSign$Params } from '../fn/bid-new/bid-new-sign';
import { ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf } from '../models/api-market-json-result-of-market-pagination-result-of-bid-info-of';
import { ApiMarketJsonResultOfSignBidResponse } from '../models/api-market-json-result-of-sign-bid-response';

@Injectable({ providedIn: 'root' })
export class BidNewApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `bidNewSign()` */
  static readonly BidNewSignPath = '/bla-bla-vla/bid-new/sign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bidNewSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bidNewSign$Response(params?: BidNewSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSignBidResponse>> {
    return bidNewSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `bidNewSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bidNewSign(params?: BidNewSign$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSignBidResponse> {
    return this.bidNewSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSignBidResponse>): ApiMarketJsonResultOfSignBidResponse => r.body)
    );
  }

  /** Path part for operation `bidNewCreate()` */
  static readonly BidNewCreatePath = '/bla-bla-vla/bid-new';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bidNewCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bidNewCreate$Response(params?: BidNewCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return bidNewCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `bidNewCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bidNewCreate(params?: BidNewCreate$Params, context?: HttpContext): Observable<Blob> {
    return this.bidNewCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `bidNewGetBids()` */
  static readonly BidNewGetBidsPath = '/bla-bla-vla/bid-new/trade/{tradeGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bidNewGetBids()` instead.
   *
   * This method doesn't expect any request body.
   */
  bidNewGetBids$Response(params: BidNewGetBids$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf>> {
    return bidNewGetBids(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `bidNewGetBids$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bidNewGetBids(params: BidNewGetBids$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf> {
    return this.bidNewGetBids$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf>): ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf => r.body)
    );
  }

}

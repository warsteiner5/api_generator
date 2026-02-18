/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfBoolean } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfCanCreateChildTradeValidationResult } from '../models/api-market-json-result-of-can-create-child-trade-validation-result';
import { ApiMarketJsonResultOfNotTookPlaceLinkValidationResult } from '../models/api-market-json-result-of-not-took-place-link-validation-result';
import { ApiMarketJsonResultOfTradePublishResult } from '../models/api-market-json-result-of-trade-publish-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { tradesNotTookPlaceLinkNotTookPlaceTrade } from '../fn/trades-not-took-place/trades-not-took-place-link-not-took-place-trade';
import { TradesNotTookPlaceLinkNotTookPlaceTrade$Params } from '../fn/trades-not-took-place/trades-not-took-place-link-not-took-place-trade';
import { tradesNotTookPlaceRepublish } from '../fn/trades-not-took-place/trades-not-took-place-republish';
import { TradesNotTookPlaceRepublish$Params } from '../fn/trades-not-took-place/trades-not-took-place-republish';
import { tradesNotTookPlaceSetLapsed } from '../fn/trades-not-took-place/trades-not-took-place-set-lapsed';
import { TradesNotTookPlaceSetLapsed$Params } from '../fn/trades-not-took-place/trades-not-took-place-set-lapsed';
import { tradesNotTookPlaceValidateCanCreateChildTrade } from '../fn/trades-not-took-place/trades-not-took-place-validate-can-create-child-trade';
import { TradesNotTookPlaceValidateCanCreateChildTrade$Params } from '../fn/trades-not-took-place/trades-not-took-place-validate-can-create-child-trade';
import { tradesNotTookPlaceValidateCartCanCreateChildTrade } from '../fn/trades-not-took-place/trades-not-took-place-validate-cart-can-create-child-trade';
import { TradesNotTookPlaceValidateCartCanCreateChildTrade$Params } from '../fn/trades-not-took-place/trades-not-took-place-validate-cart-can-create-child-trade';
import { tradesNotTookPlaceValidatePossibilityToLink } from '../fn/trades-not-took-place/trades-not-took-place-validate-possibility-to-link';
import { TradesNotTookPlaceValidatePossibilityToLink$Params } from '../fn/trades-not-took-place/trades-not-took-place-validate-possibility-to-link';

@Injectable({ providedIn: 'root' })
export class TradesNotTookPlaceApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tradesNotTookPlaceRepublish()` */
  static readonly TradesNotTookPlaceRepublishPath = '/bla-bla-vla/trades/nottookplace/republish/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesNotTookPlaceRepublish()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesNotTookPlaceRepublish$Response(params: TradesNotTookPlaceRepublish$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>> {
    return tradesNotTookPlaceRepublish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesNotTookPlaceRepublish$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesNotTookPlaceRepublish(params: TradesNotTookPlaceRepublish$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePublishResult> {
    return this.tradesNotTookPlaceRepublish$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>): ApiMarketJsonResultOfTradePublishResult => r.body)
    );
  }

  /** Path part for operation `tradesNotTookPlaceLinkNotTookPlaceTrade()` */
  static readonly TradesNotTookPlaceLinkNotTookPlaceTradePath = '/bla-bla-vla/trades/nottookplace/{tradeId}/link/{childTradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesNotTookPlaceLinkNotTookPlaceTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesNotTookPlaceLinkNotTookPlaceTrade$Response(params: TradesNotTookPlaceLinkNotTookPlaceTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return tradesNotTookPlaceLinkNotTookPlaceTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesNotTookPlaceLinkNotTookPlaceTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesNotTookPlaceLinkNotTookPlaceTrade(params: TradesNotTookPlaceLinkNotTookPlaceTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.tradesNotTookPlaceLinkNotTookPlaceTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `tradesNotTookPlaceValidatePossibilityToLink()` */
  static readonly TradesNotTookPlaceValidatePossibilityToLinkPath = '/bla-bla-vla/trades/nottookplace/link/{childTradeId}/validate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesNotTookPlaceValidatePossibilityToLink()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesNotTookPlaceValidatePossibilityToLink$Response(params: TradesNotTookPlaceValidatePossibilityToLink$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNotTookPlaceLinkValidationResult>> {
    return tradesNotTookPlaceValidatePossibilityToLink(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesNotTookPlaceValidatePossibilityToLink$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesNotTookPlaceValidatePossibilityToLink(params: TradesNotTookPlaceValidatePossibilityToLink$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfNotTookPlaceLinkValidationResult> {
    return this.tradesNotTookPlaceValidatePossibilityToLink$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfNotTookPlaceLinkValidationResult>): ApiMarketJsonResultOfNotTookPlaceLinkValidationResult => r.body)
    );
  }

  /** Path part for operation `tradesNotTookPlaceValidateCanCreateChildTrade()` */
  static readonly TradesNotTookPlaceValidateCanCreateChildTradePath = '/bla-bla-vla/trades/nottookplace/canCreateChild';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesNotTookPlaceValidateCanCreateChildTrade()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesNotTookPlaceValidateCanCreateChildTrade$Response(params?: TradesNotTookPlaceValidateCanCreateChildTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCanCreateChildTradeValidationResult>> {
    return tradesNotTookPlaceValidateCanCreateChildTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesNotTookPlaceValidateCanCreateChildTrade$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesNotTookPlaceValidateCanCreateChildTrade(params?: TradesNotTookPlaceValidateCanCreateChildTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCanCreateChildTradeValidationResult> {
    return this.tradesNotTookPlaceValidateCanCreateChildTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCanCreateChildTradeValidationResult>): ApiMarketJsonResultOfCanCreateChildTradeValidationResult => r.body)
    );
  }

  /** Path part for operation `tradesNotTookPlaceValidateCartCanCreateChildTrade()` */
  static readonly TradesNotTookPlaceValidateCartCanCreateChildTradePath = '/bla-bla-vla/trades/nottookplace/cart/canCreateChild';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesNotTookPlaceValidateCartCanCreateChildTrade()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesNotTookPlaceValidateCartCanCreateChildTrade$Response(params?: TradesNotTookPlaceValidateCartCanCreateChildTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCanCreateChildTradeValidationResult>> {
    return tradesNotTookPlaceValidateCartCanCreateChildTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesNotTookPlaceValidateCartCanCreateChildTrade$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesNotTookPlaceValidateCartCanCreateChildTrade(params?: TradesNotTookPlaceValidateCartCanCreateChildTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCanCreateChildTradeValidationResult> {
    return this.tradesNotTookPlaceValidateCartCanCreateChildTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCanCreateChildTradeValidationResult>): ApiMarketJsonResultOfCanCreateChildTradeValidationResult => r.body)
    );
  }

  /** Path part for operation `tradesNotTookPlaceSetLapsed()` */
  static readonly TradesNotTookPlaceSetLapsedPath = '/bla-bla-vla/trades/nottookplace/{tradeId}/setLapsed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesNotTookPlaceSetLapsed()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesNotTookPlaceSetLapsed$Response(params: TradesNotTookPlaceSetLapsed$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesNotTookPlaceSetLapsed(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesNotTookPlaceSetLapsed$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesNotTookPlaceSetLapsed(params: TradesNotTookPlaceSetLapsed$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesNotTookPlaceSetLapsed$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}

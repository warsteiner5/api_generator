/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiApiResultAltDto } from '../models/api-api-result';
import { ApiApiResultOfInteger2AltDto } from '../models/api-api-result-of-integer-2';
import { ApiExternalDealDto } from '../models/api-external-deal-dto';
import { externalDealsCreateExternalDeal } from '../fn/external-deals/external-deals-create-external-deal';
import { ExternalDealsCreateExternalDeal$Params } from '../fn/external-deals/external-deals-create-external-deal';
import { externalDealsDeleteExternalDeal } from '../fn/external-deals/external-deals-delete-external-deal';
import { ExternalDealsDeleteExternalDeal$Params } from '../fn/external-deals/external-deals-delete-external-deal';
import { externalDealsGetExternalDeal } from '../fn/external-deals/external-deals-get-external-deal';
import { ExternalDealsGetExternalDeal$Params } from '../fn/external-deals/external-deals-get-external-deal';
import { externalDealsGetExternalDealTrade } from '../fn/external-deals/external-deals-get-external-deal-trade';
import { ExternalDealsGetExternalDealTrade$Params } from '../fn/external-deals/external-deals-get-external-deal-trade';
import { externalDealsPublish } from '../fn/external-deals/external-deals-publish';
import { ExternalDealsPublish$Params } from '../fn/external-deals/external-deals-publish';
import { externalDealsPublish2 } from '../fn/external-deals/external-deals-publish-2';
import { ExternalDealsPublish2$Params } from '../fn/external-deals/external-deals-publish-2';
import { externalDealsReplace } from '../fn/external-deals/external-deals-replace';
import { ExternalDealsReplace$Params } from '../fn/external-deals/external-deals-replace';
import { ApiExternalDealTradeInfoDto } from '../models/api-external-deal-trade-info-dto';

@Injectable({ providedIn: 'root' })
export class ExternalDealsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `externalDealsGetExternalDeal()` */
  static readonly ExternalDealsGetExternalDealPath = '/bla-bla-vla/external-deals/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealsGetExternalDeal()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealsGetExternalDeal$Response(params: ExternalDealsGetExternalDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExternalDealDto>> {
    return externalDealsGetExternalDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealsGetExternalDeal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealsGetExternalDeal(params: ExternalDealsGetExternalDeal$Params, context?: HttpContext): Observable<ApiExternalDealDto> {
    return this.externalDealsGetExternalDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiExternalDealDto>): ApiExternalDealDto => r.body)
    );
  }

  /** Path part for operation `externalDealsReplace()` */
  static readonly ExternalDealsReplacePath = '/bla-bla-vla/external-deals/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealsReplace()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealsReplace$Response(params: ExternalDealsReplace$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiResultAltDto>> {
    return externalDealsReplace(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealsReplace$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealsReplace(params: ExternalDealsReplace$Params, context?: HttpContext): Observable<ApiApiResultAltDto> {
    return this.externalDealsReplace$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiResultAltDto>): ApiApiResultAltDto => r.body)
    );
  }

  /** Path part for operation `externalDealsDeleteExternalDeal()` */
  static readonly ExternalDealsDeleteExternalDealPath = '/bla-bla-vla/external-deals/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealsDeleteExternalDeal()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealsDeleteExternalDeal$Response(params: ExternalDealsDeleteExternalDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return externalDealsDeleteExternalDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealsDeleteExternalDeal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealsDeleteExternalDeal(params: ExternalDealsDeleteExternalDeal$Params, context?: HttpContext): Observable<Blob> {
    return this.externalDealsDeleteExternalDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `externalDealsCreateExternalDeal()` */
  static readonly ExternalDealsCreateExternalDealPath = '/bla-bla-vla/external-deals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealsCreateExternalDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealsCreateExternalDeal$Response(params?: ExternalDealsCreateExternalDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiResultOfInteger2AltDto>> {
    return externalDealsCreateExternalDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealsCreateExternalDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealsCreateExternalDeal(params?: ExternalDealsCreateExternalDeal$Params, context?: HttpContext): Observable<ApiApiResultOfInteger2AltDto> {
    return this.externalDealsCreateExternalDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiResultOfInteger2AltDto>): ApiApiResultOfInteger2AltDto => r.body)
    );
  }

  /** Path part for operation `externalDealsGetExternalDealTrade()` */
  static readonly ExternalDealsGetExternalDealTradePath = '/bla-bla-vla/external-deals/trade/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealsGetExternalDealTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealsGetExternalDealTrade$Response(params: ExternalDealsGetExternalDealTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExternalDealTradeInfoDto>> {
    return externalDealsGetExternalDealTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealsGetExternalDealTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealsGetExternalDealTrade(params: ExternalDealsGetExternalDealTrade$Params, context?: HttpContext): Observable<ApiExternalDealTradeInfoDto> {
    return this.externalDealsGetExternalDealTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiExternalDealTradeInfoDto>): ApiExternalDealTradeInfoDto => r.body)
    );
  }

  /** Path part for operation `externalDealsPublish()` */
  static readonly ExternalDealsPublishPath = '/bla-bla-vla/external-deals/publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealsPublish()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealsPublish$Response(params?: ExternalDealsPublish$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiResultOfInteger2AltDto>> {
    return externalDealsPublish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealsPublish$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealsPublish(params?: ExternalDealsPublish$Params, context?: HttpContext): Observable<ApiApiResultOfInteger2AltDto> {
    return this.externalDealsPublish$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiResultOfInteger2AltDto>): ApiApiResultOfInteger2AltDto => r.body)
    );
  }

  /** Path part for operation `externalDealsPublish2()` */
  static readonly ExternalDealsPublish2Path = '/bla-bla-vla/external-deals/{id}/publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealsPublish2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealsPublish2$Response(params: ExternalDealsPublish2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiResultAltDto>> {
    return externalDealsPublish2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealsPublish2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealsPublish2(params: ExternalDealsPublish2$Params, context?: HttpContext): Observable<ApiApiResultAltDto> {
    return this.externalDealsPublish2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiResultAltDto>): ApiApiResultAltDto => r.body)
    );
  }

}

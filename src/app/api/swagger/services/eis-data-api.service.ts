/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { eisDataGetPlanPositionDetails } from '../fn/eis-data/eis-data-get-plan-position-details';
import { EisDataGetPlanPositionDetails$Params } from '../fn/eis-data/eis-data-get-plan-position-details';
import { eisDataSearchProtocolTypes } from '../fn/eis-data/eis-data-search-protocol-types';
import { EisDataSearchProtocolTypes$Params } from '../fn/eis-data/eis-data-search-protocol-types';
import { eisDataSearchPurchaseMethods } from '../fn/eis-data/eis-data-search-purchase-methods';
import { EisDataSearchPurchaseMethods$Params } from '../fn/eis-data/eis-data-search-purchase-methods';
import { eisDataValidateEisPlan } from '../fn/eis-data/eis-data-validate-eis-plan';
import { EisDataValidateEisPlan$Params } from '../fn/eis-data/eis-data-validate-eis-plan';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem } from '../models/api-market-json-result-of-i-read-only-collection-of-eis-dictionary-item';
import { ApiMarketJsonResultOfTradePlan223PositionDto } from '../models/api-market-json-result-of-trade-plan-223-position-dto';
import { ApiMarketJsonResultOfValidationResult } from '../models/api-market-json-result-of-validation-result';

@Injectable({ providedIn: 'root' })
export class EisDataApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `eisDataSearchPurchaseMethods()` */
  static readonly EisDataSearchPurchaseMethodsPath = '/bla-bla-vla/eis/data/purchase-methods';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eisDataSearchPurchaseMethods()` instead.
   *
   * This method doesn't expect any request body.
   */
  eisDataSearchPurchaseMethods$Response(params: EisDataSearchPurchaseMethods$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem>> {
    return eisDataSearchPurchaseMethods(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eisDataSearchPurchaseMethods$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eisDataSearchPurchaseMethods(params: EisDataSearchPurchaseMethods$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem> {
    return this.eisDataSearchPurchaseMethods$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem>): ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem => r.body)
    );
  }

  /** Path part for operation `eisDataSearchProtocolTypes()` */
  static readonly EisDataSearchProtocolTypesPath = '/bla-bla-vla/eis/data/protocol-types';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eisDataSearchProtocolTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  eisDataSearchProtocolTypes$Response(params: EisDataSearchProtocolTypes$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem>> {
    return eisDataSearchProtocolTypes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eisDataSearchProtocolTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eisDataSearchProtocolTypes(params: EisDataSearchProtocolTypes$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem> {
    return this.eisDataSearchProtocolTypes$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem>): ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem => r.body)
    );
  }

  /** Path part for operation `eisDataValidateEisPlan()` */
  static readonly EisDataValidateEisPlanPath = '/bla-bla-vla/eis/data/plans/{planRegistrationNumber}/position/{planPositionNumber}/check';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eisDataValidateEisPlan()` instead.
   *
   * This method doesn't expect any request body.
   */
  eisDataValidateEisPlan$Response(params: EisDataValidateEisPlan$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfValidationResult>> {
    return eisDataValidateEisPlan(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eisDataValidateEisPlan$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eisDataValidateEisPlan(params: EisDataValidateEisPlan$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfValidationResult> {
    return this.eisDataValidateEisPlan$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfValidationResult>): ApiMarketJsonResultOfValidationResult => r.body)
    );
  }

  /** Path part for operation `eisDataGetPlanPositionDetails()` */
  static readonly EisDataGetPlanPositionDetailsPath = '/bla-bla-vla/eis/data/plans/{planRegistrationNumber}/positions/{positionNumber}/details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eisDataGetPlanPositionDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  eisDataGetPlanPositionDetails$Response(params: EisDataGetPlanPositionDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePlan223PositionDto>> {
    return eisDataGetPlanPositionDetails(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eisDataGetPlanPositionDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eisDataGetPlanPositionDetails(params: EisDataGetPlanPositionDetails$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePlan223PositionDto> {
    return this.eisDataGetPlanPositionDetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePlan223PositionDto>): ApiMarketJsonResultOfTradePlan223PositionDto => r.body)
    );
  }

}

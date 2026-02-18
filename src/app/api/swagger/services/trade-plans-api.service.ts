/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfInteger } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-market-search-result-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-trade-plan-lot-market-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-trade-plan-market-short-dto';
import { ApiMarketJsonResultOfTradePlanMarketShortDto } from '../models/api-market-json-result-of-trade-plan-market-short-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { tradePlansGetActualPlan } from '../fn/trade-plans/trade-plans-get-actual-plan';
import { TradePlansGetActualPlan$Params } from '../fn/trade-plans/trade-plans-get-actual-plan';
import { tradePlansGetArchivePlans } from '../fn/trade-plans/trade-plans-get-archive-plans';
import { TradePlansGetArchivePlans$Params } from '../fn/trade-plans/trade-plans-get-archive-plans';
import { tradePlansGetPaginatePlanLots } from '../fn/trade-plans/trade-plans-get-paginate-plan-lots';
import { TradePlansGetPaginatePlanLots$Params } from '../fn/trade-plans/trade-plans-get-paginate-plan-lots';
import { tradePlansGetPaginatePublicPlanLots } from '../fn/trade-plans/trade-plans-get-paginate-public-plan-lots';
import { TradePlansGetPaginatePublicPlanLots$Params } from '../fn/trade-plans/trade-plans-get-paginate-public-plan-lots';
import { tradePlansGetPlanShortDetails } from '../fn/trade-plans/trade-plans-get-plan-short-details';
import { TradePlansGetPlanShortDetails$Params } from '../fn/trade-plans/trade-plans-get-plan-short-details';
import { tradePlansGetTradesByPlanPostion } from '../fn/trade-plans/trade-plans-get-trades-by-plan-postion';
import { TradePlansGetTradesByPlanPostion$Params } from '../fn/trade-plans/trade-plans-get-trades-by-plan-postion';
import { tradePlansPlanPositionToTradesLinkNotActual } from '../fn/trade-plans/trade-plans-plan-position-to-trades-link-not-actual';
import { TradePlansPlanPositionToTradesLinkNotActual$Params } from '../fn/trade-plans/trade-plans-plan-position-to-trades-link-not-actual';
import { tradePlansUploadAndSavePlan } from '../fn/trade-plans/trade-plans-upload-and-save-plan';
import { TradePlansUploadAndSavePlan$Params } from '../fn/trade-plans/trade-plans-upload-and-save-plan';

@Injectable({ providedIn: 'root' })
export class TradePlansApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tradePlansUploadAndSavePlan()` */
  static readonly TradePlansUploadAndSavePlanPath = '/bla-bla-vla/plans/upload/{guid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradePlansUploadAndSavePlan()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePlansUploadAndSavePlan$Response(params: TradePlansUploadAndSavePlan$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return tradePlansUploadAndSavePlan(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradePlansUploadAndSavePlan$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePlansUploadAndSavePlan(params: TradePlansUploadAndSavePlan$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.tradePlansUploadAndSavePlan$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `tradePlansGetArchivePlans()` */
  static readonly TradePlansGetArchivePlansPath = '/bla-bla-vla/plans/archive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradePlansGetArchivePlans()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradePlansGetArchivePlans$Response(params?: TradePlansGetArchivePlans$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto>> {
    return tradePlansGetArchivePlans(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradePlansGetArchivePlans$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradePlansGetArchivePlans(params?: TradePlansGetArchivePlans$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto> {
    return this.tradePlansGetArchivePlans$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto => r.body)
    );
  }

  /** Path part for operation `tradePlansGetPlanShortDetails()` */
  static readonly TradePlansGetPlanShortDetailsPath = '/bla-bla-vla/plans/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradePlansGetPlanShortDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePlansGetPlanShortDetails$Response(params: TradePlansGetPlanShortDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePlanMarketShortDto>> {
    return tradePlansGetPlanShortDetails(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradePlansGetPlanShortDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePlansGetPlanShortDetails(params: TradePlansGetPlanShortDetails$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePlanMarketShortDto> {
    return this.tradePlansGetPlanShortDetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePlanMarketShortDto>): ApiMarketJsonResultOfTradePlanMarketShortDto => r.body)
    );
  }

  /** Path part for operation `tradePlansGetPaginatePublicPlanLots()` */
  static readonly TradePlansGetPaginatePublicPlanLotsPath = '/bla-bla-vla/plans/publicLots';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradePlansGetPaginatePublicPlanLots()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradePlansGetPaginatePublicPlanLots$Response(params?: TradePlansGetPaginatePublicPlanLots$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto>> {
    return tradePlansGetPaginatePublicPlanLots(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradePlansGetPaginatePublicPlanLots$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradePlansGetPaginatePublicPlanLots(params?: TradePlansGetPaginatePublicPlanLots$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto> {
    return this.tradePlansGetPaginatePublicPlanLots$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto => r.body)
    );
  }

  /** Path part for operation `tradePlansGetPaginatePlanLots()` */
  static readonly TradePlansGetPaginatePlanLotsPath = '/bla-bla-vla/plans/{id}/lots';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradePlansGetPaginatePlanLots()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradePlansGetPaginatePlanLots$Response(params: TradePlansGetPaginatePlanLots$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto>> {
    return tradePlansGetPaginatePlanLots(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradePlansGetPaginatePlanLots$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradePlansGetPaginatePlanLots(params: TradePlansGetPaginatePlanLots$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto> {
    return this.tradePlansGetPaginatePlanLots$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto => r.body)
    );
  }

  /** Path part for operation `tradePlansGetTradesByPlanPostion()` */
  static readonly TradePlansGetTradesByPlanPostionPath = '/bla-bla-vla/plans/search/{planPositionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradePlansGetTradesByPlanPostion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradePlansGetTradesByPlanPostion$Response(params: TradePlansGetTradesByPlanPostion$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>> {
    return tradePlansGetTradesByPlanPostion(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradePlansGetTradesByPlanPostion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradePlansGetTradesByPlanPostion(params: TradePlansGetTradesByPlanPostion$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto> {
    return this.tradePlansGetTradesByPlanPostion$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto => r.body)
    );
  }

  /** Path part for operation `tradePlansGetActualPlan()` */
  static readonly TradePlansGetActualPlanPath = '/bla-bla-vla/plans';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradePlansGetActualPlan()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePlansGetActualPlan$Response(params?: TradePlansGetActualPlan$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePlanMarketShortDto>> {
    return tradePlansGetActualPlan(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradePlansGetActualPlan$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePlansGetActualPlan(params?: TradePlansGetActualPlan$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePlanMarketShortDto> {
    return this.tradePlansGetActualPlan$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePlanMarketShortDto>): ApiMarketJsonResultOfTradePlanMarketShortDto => r.body)
    );
  }

  /** Path part for operation `tradePlansPlanPositionToTradesLinkNotActual()` */
  static readonly TradePlansPlanPositionToTradesLinkNotActualPath = '/bla-bla-vla/plans/position-to-trade-link/{tradeId}/not-actual';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradePlansPlanPositionToTradesLinkNotActual()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePlansPlanPositionToTradesLinkNotActual$Response(params: TradePlansPlanPositionToTradesLinkNotActual$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradePlansPlanPositionToTradesLinkNotActual(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradePlansPlanPositionToTradesLinkNotActual$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePlansPlanPositionToTradesLinkNotActual(params: TradePlansPlanPositionToTradesLinkNotActual$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradePlansPlanPositionToTradesLinkNotActual$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}

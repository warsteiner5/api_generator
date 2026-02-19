/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfBooleanAltDto } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-market-search-result-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItemAltDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-price-list-item';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItemAltDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-tag-item';
import { ApiMarketJsonResultOfPomogatorSettingsResultAltDto } from '../models/api-market-json-result-of-pomogator-settings-result';
import { ApiMarketJsonResultOfPriceListItemAltDto } from '../models/api-market-json-result-of-price-list-item';
import { ApiMarketJsonResultOfSearchRecommendationsResultAltDto } from '../models/api-market-json-result-of-search-recommendations-result';
import { ApiMarketJsonResultOfSettingsAddedResponseAltDto } from '../models/api-market-json-result-of-settings-added-response';
import { ApiMarketJsonResultOfSettingsStatsResultAltDto } from '../models/api-market-json-result-of-settings-stats-result';
import { ApiMarketJsonResultOfTagItemAltDto } from '../models/api-market-json-result-of-tag-item';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { pomogatorAddMultipleTagsSettings } from '../fn/pomogator/pomogator-add-multiple-tags-settings';
import { PomogatorAddMultipleTagsSettings$Params } from '../fn/pomogator/pomogator-add-multiple-tags-settings';
import { pomogatorAddPriceListSettings } from '../fn/pomogator/pomogator-add-price-list-settings';
import { PomogatorAddPriceListSettings$Params } from '../fn/pomogator/pomogator-add-price-list-settings';
import { pomogatorAddTagsSettings } from '../fn/pomogator/pomogator-add-tags-settings';
import { PomogatorAddTagsSettings$Params } from '../fn/pomogator/pomogator-add-tags-settings';
import { pomogatorDeletePriceListSettings } from '../fn/pomogator/pomogator-delete-price-list-settings';
import { PomogatorDeletePriceListSettings$Params } from '../fn/pomogator/pomogator-delete-price-list-settings';
import { pomogatorDeleteTagsSettings } from '../fn/pomogator/pomogator-delete-tags-settings';
import { PomogatorDeleteTagsSettings$Params } from '../fn/pomogator/pomogator-delete-tags-settings';
import { pomogatorGetSettings } from '../fn/pomogator/pomogator-get-settings';
import { PomogatorGetSettings$Params } from '../fn/pomogator/pomogator-get-settings';
import { pomogatorGetSettingsExistFlag } from '../fn/pomogator/pomogator-get-settings-exist-flag';
import { PomogatorGetSettingsExistFlag$Params } from '../fn/pomogator/pomogator-get-settings-exist-flag';
import { pomogatorGetSettingsPriceList } from '../fn/pomogator/pomogator-get-settings-price-list';
import { PomogatorGetSettingsPriceList$Params } from '../fn/pomogator/pomogator-get-settings-price-list';
import { pomogatorGetSettingsPriceLists } from '../fn/pomogator/pomogator-get-settings-price-lists';
import { PomogatorGetSettingsPriceLists$Params } from '../fn/pomogator/pomogator-get-settings-price-lists';
import { pomogatorGetSettingsStats } from '../fn/pomogator/pomogator-get-settings-stats';
import { PomogatorGetSettingsStats$Params } from '../fn/pomogator/pomogator-get-settings-stats';
import { pomogatorGetSettingsTag } from '../fn/pomogator/pomogator-get-settings-tag';
import { PomogatorGetSettingsTag$Params } from '../fn/pomogator/pomogator-get-settings-tag';
import { pomogatorGetSettingsTagExist } from '../fn/pomogator/pomogator-get-settings-tag-exist';
import { PomogatorGetSettingsTagExist$Params } from '../fn/pomogator/pomogator-get-settings-tag-exist';
import { pomogatorGetSettingsTags } from '../fn/pomogator/pomogator-get-settings-tags';
import { PomogatorGetSettingsTags$Params } from '../fn/pomogator/pomogator-get-settings-tags';
import { pomogatorGetTradeRecommendations } from '../fn/pomogator/pomogator-get-trade-recommendations';
import { PomogatorGetTradeRecommendations$Params } from '../fn/pomogator/pomogator-get-trade-recommendations';
import { pomogatorGetTradeRecommendationsExtended } from '../fn/pomogator/pomogator-get-trade-recommendations-extended';
import { PomogatorGetTradeRecommendationsExtended$Params } from '../fn/pomogator/pomogator-get-trade-recommendations-extended';
import { pomogatorSetRegionsForAllTags } from '../fn/pomogator/pomogator-set-regions-for-all-tags';
import { PomogatorSetRegionsForAllTags$Params } from '../fn/pomogator/pomogator-set-regions-for-all-tags';
import { pomogatorTogglePriceListSettings } from '../fn/pomogator/pomogator-toggle-price-list-settings';
import { PomogatorTogglePriceListSettings$Params } from '../fn/pomogator/pomogator-toggle-price-list-settings';
import { pomogatorToggleTagSettings } from '../fn/pomogator/pomogator-toggle-tag-settings';
import { PomogatorToggleTagSettings$Params } from '../fn/pomogator/pomogator-toggle-tag-settings';
import { pomogatorUpdatePriceListSettings } from '../fn/pomogator/pomogator-update-price-list-settings';
import { PomogatorUpdatePriceListSettings$Params } from '../fn/pomogator/pomogator-update-price-list-settings';
import { pomogatorUpdateTagsSettings } from '../fn/pomogator/pomogator-update-tags-settings';
import { PomogatorUpdateTagsSettings$Params } from '../fn/pomogator/pomogator-update-tags-settings';

@Injectable({ providedIn: 'root' })
export class PomogatorApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `pomogatorGetTradeRecommendations()` */
  static readonly PomogatorGetTradeRecommendationsPath = '/market/api/v1/pomogator/recommendations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorGetTradeRecommendations()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorGetTradeRecommendations$Response(params?: PomogatorGetTradeRecommendations$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSearchRecommendationsResultAltDto>> {
    return pomogatorGetTradeRecommendations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorGetTradeRecommendations$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorGetTradeRecommendations(params?: PomogatorGetTradeRecommendations$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSearchRecommendationsResultAltDto> {
    return this.pomogatorGetTradeRecommendations$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSearchRecommendationsResultAltDto>): ApiMarketJsonResultOfSearchRecommendationsResultAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorGetTradeRecommendationsExtended()` */
  static readonly PomogatorGetTradeRecommendationsExtendedPath = '/market/api/v1/pomogator/recommendationsExtended';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorGetTradeRecommendationsExtended()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorGetTradeRecommendationsExtended$Response(params?: PomogatorGetTradeRecommendationsExtended$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>> {
    return pomogatorGetTradeRecommendationsExtended(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorGetTradeRecommendationsExtended$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorGetTradeRecommendationsExtended(params?: PomogatorGetTradeRecommendationsExtended$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto> {
    return this.pomogatorGetTradeRecommendationsExtended$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto => r.body)
    );
  }

  /** Path part for operation `pomogatorGetSettings()` */
  static readonly PomogatorGetSettingsPath = '/market/api/v1/pomogator/getSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorGetSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettings$Response(params?: PomogatorGetSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPomogatorSettingsResultAltDto>> {
    return pomogatorGetSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorGetSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettings(params?: PomogatorGetSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPomogatorSettingsResultAltDto> {
    return this.pomogatorGetSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPomogatorSettingsResultAltDto>): ApiMarketJsonResultOfPomogatorSettingsResultAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorAddTagsSettings()` */
  static readonly PomogatorAddTagsSettingsPath = '/market/api/v1/pomogator/addTagsSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorAddTagsSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorAddTagsSettings$Response(params?: PomogatorAddTagsSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSettingsAddedResponseAltDto>> {
    return pomogatorAddTagsSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorAddTagsSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorAddTagsSettings(params?: PomogatorAddTagsSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSettingsAddedResponseAltDto> {
    return this.pomogatorAddTagsSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSettingsAddedResponseAltDto>): ApiMarketJsonResultOfSettingsAddedResponseAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorAddMultipleTagsSettings()` */
  static readonly PomogatorAddMultipleTagsSettingsPath = '/market/api/v1/pomogator/addMultipleTagsSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorAddMultipleTagsSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorAddMultipleTagsSettings$Response(params?: PomogatorAddMultipleTagsSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSettingsAddedResponseAltDto>> {
    return pomogatorAddMultipleTagsSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorAddMultipleTagsSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorAddMultipleTagsSettings(params?: PomogatorAddMultipleTagsSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSettingsAddedResponseAltDto> {
    return this.pomogatorAddMultipleTagsSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSettingsAddedResponseAltDto>): ApiMarketJsonResultOfSettingsAddedResponseAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorUpdateTagsSettings()` */
  static readonly PomogatorUpdateTagsSettingsPath = '/market/api/v1/pomogator/updateTagsSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorUpdateTagsSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorUpdateTagsSettings$Response(params?: PomogatorUpdateTagsSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return pomogatorUpdateTagsSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorUpdateTagsSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorUpdateTagsSettings(params?: PomogatorUpdateTagsSettings$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.pomogatorUpdateTagsSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorDeleteTagsSettings()` */
  static readonly PomogatorDeleteTagsSettingsPath = '/market/api/v1/pomogator/deleteTagsSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorDeleteTagsSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorDeleteTagsSettings$Response(params?: PomogatorDeleteTagsSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return pomogatorDeleteTagsSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorDeleteTagsSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorDeleteTagsSettings(params?: PomogatorDeleteTagsSettings$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.pomogatorDeleteTagsSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorAddPriceListSettings()` */
  static readonly PomogatorAddPriceListSettingsPath = '/market/api/v1/pomogator/addPriceListSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorAddPriceListSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   *
   * @deprecated
   */
  pomogatorAddPriceListSettings$Response(params?: PomogatorAddPriceListSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSettingsAddedResponseAltDto>> {
    return pomogatorAddPriceListSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorAddPriceListSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   *
   * @deprecated
   */
  pomogatorAddPriceListSettings(params?: PomogatorAddPriceListSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSettingsAddedResponseAltDto> {
    return this.pomogatorAddPriceListSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSettingsAddedResponseAltDto>): ApiMarketJsonResultOfSettingsAddedResponseAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorUpdatePriceListSettings()` */
  static readonly PomogatorUpdatePriceListSettingsPath = '/market/api/v1/pomogator/updatePriceListSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorUpdatePriceListSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorUpdatePriceListSettings$Response(params?: PomogatorUpdatePriceListSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return pomogatorUpdatePriceListSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorUpdatePriceListSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorUpdatePriceListSettings(params?: PomogatorUpdatePriceListSettings$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.pomogatorUpdatePriceListSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorDeletePriceListSettings()` */
  static readonly PomogatorDeletePriceListSettingsPath = '/market/api/v1/pomogator/deletePriceListSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorDeletePriceListSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorDeletePriceListSettings$Response(params?: PomogatorDeletePriceListSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return pomogatorDeletePriceListSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorDeletePriceListSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorDeletePriceListSettings(params?: PomogatorDeletePriceListSettings$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.pomogatorDeletePriceListSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorToggleTagSettings()` */
  static readonly PomogatorToggleTagSettingsPath = '/market/api/v1/pomogator/toggleTagSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorToggleTagSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorToggleTagSettings$Response(params?: PomogatorToggleTagSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return pomogatorToggleTagSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorToggleTagSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorToggleTagSettings(params?: PomogatorToggleTagSettings$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.pomogatorToggleTagSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorTogglePriceListSettings()` */
  static readonly PomogatorTogglePriceListSettingsPath = '/market/api/v1/pomogator/togglePriceListSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorTogglePriceListSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorTogglePriceListSettings$Response(params?: PomogatorTogglePriceListSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return pomogatorTogglePriceListSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorTogglePriceListSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorTogglePriceListSettings(params?: PomogatorTogglePriceListSettings$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.pomogatorTogglePriceListSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorSetRegionsForAllTags()` */
  static readonly PomogatorSetRegionsForAllTagsPath = '/market/api/v1/pomogator/setRegionsForAllTags';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorSetRegionsForAllTags()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorSetRegionsForAllTags$Response(params?: PomogatorSetRegionsForAllTags$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return pomogatorSetRegionsForAllTags(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorSetRegionsForAllTags$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorSetRegionsForAllTags(params?: PomogatorSetRegionsForAllTags$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.pomogatorSetRegionsForAllTags$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorGetSettingsStats()` */
  static readonly PomogatorGetSettingsStatsPath = '/market/api/v1/pomogator/settings/stats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorGetSettingsStats()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettingsStats$Response(params?: PomogatorGetSettingsStats$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSettingsStatsResultAltDto>> {
    return pomogatorGetSettingsStats(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorGetSettingsStats$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettingsStats(params?: PomogatorGetSettingsStats$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSettingsStatsResultAltDto> {
    return this.pomogatorGetSettingsStats$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSettingsStatsResultAltDto>): ApiMarketJsonResultOfSettingsStatsResultAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorGetSettingsTags()` */
  static readonly PomogatorGetSettingsTagsPath = '/market/api/v1/pomogator/settings/tags';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorGetSettingsTags()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorGetSettingsTags$Response(params?: PomogatorGetSettingsTags$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItemAltDto>> {
    return pomogatorGetSettingsTags(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorGetSettingsTags$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorGetSettingsTags(params?: PomogatorGetSettingsTags$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItemAltDto> {
    return this.pomogatorGetSettingsTags$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItemAltDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItemAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorGetSettingsPriceLists()` */
  static readonly PomogatorGetSettingsPriceListsPath = '/market/api/v1/pomogator/settings/price-lists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorGetSettingsPriceLists()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorGetSettingsPriceLists$Response(params?: PomogatorGetSettingsPriceLists$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItemAltDto>> {
    return pomogatorGetSettingsPriceLists(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorGetSettingsPriceLists$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pomogatorGetSettingsPriceLists(params?: PomogatorGetSettingsPriceLists$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItemAltDto> {
    return this.pomogatorGetSettingsPriceLists$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItemAltDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItemAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorGetSettingsExistFlag()` */
  static readonly PomogatorGetSettingsExistFlagPath = '/market/api/v1/pomogator/settings/exist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorGetSettingsExistFlag()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettingsExistFlag$Response(params?: PomogatorGetSettingsExistFlag$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return pomogatorGetSettingsExistFlag(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorGetSettingsExistFlag$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettingsExistFlag(params?: PomogatorGetSettingsExistFlag$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.pomogatorGetSettingsExistFlag$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorGetSettingsTagExist()` */
  static readonly PomogatorGetSettingsTagExistPath = '/market/api/v1/pomogator/settings/tags/exist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorGetSettingsTagExist()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettingsTagExist$Response(params: PomogatorGetSettingsTagExist$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return pomogatorGetSettingsTagExist(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorGetSettingsTagExist$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettingsTagExist(params: PomogatorGetSettingsTagExist$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.pomogatorGetSettingsTagExist$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorGetSettingsTag()` */
  static readonly PomogatorGetSettingsTagPath = '/market/api/v1/pomogator/settings/tags/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorGetSettingsTag()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettingsTag$Response(params: PomogatorGetSettingsTag$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTagItemAltDto>> {
    return pomogatorGetSettingsTag(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorGetSettingsTag$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettingsTag(params: PomogatorGetSettingsTag$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTagItemAltDto> {
    return this.pomogatorGetSettingsTag$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTagItemAltDto>): ApiMarketJsonResultOfTagItemAltDto => r.body)
    );
  }

  /** Path part for operation `pomogatorGetSettingsPriceList()` */
  static readonly PomogatorGetSettingsPriceListPath = '/market/api/v1/pomogator/settings/price-lists/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pomogatorGetSettingsPriceList()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettingsPriceList$Response(params: PomogatorGetSettingsPriceList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPriceListItemAltDto>> {
    return pomogatorGetSettingsPriceList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pomogatorGetSettingsPriceList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pomogatorGetSettingsPriceList(params: PomogatorGetSettingsPriceList$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPriceListItemAltDto> {
    return this.pomogatorGetSettingsPriceList$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPriceListItemAltDto>): ApiMarketJsonResultOfPriceListItemAltDto => r.body)
    );
  }

}

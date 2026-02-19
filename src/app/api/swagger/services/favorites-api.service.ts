/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { favoritesAddFavorite } from '../fn/favorites/favorites-add-favorite';
import { FavoritesAddFavorite$Params } from '../fn/favorites/favorites-add-favorite';
import { favoritesClearFavorite } from '../fn/favorites/favorites-clear-favorite';
import { FavoritesClearFavorite$Params } from '../fn/favorites/favorites-clear-favorite';
import { favoritesDeleteFavorite } from '../fn/favorites/favorites-delete-favorite';
import { FavoritesDeleteFavorite$Params } from '../fn/favorites/favorites-delete-favorite';
import { favoritesGetFavoriteCount } from '../fn/favorites/favorites-get-favorite-count';
import { FavoritesGetFavoriteCount$Params } from '../fn/favorites/favorites-get-favorite-count';
import { favoritesGetFavoriteDeals } from '../fn/favorites/favorites-get-favorite-deals';
import { FavoritesGetFavoriteDeals$Params } from '../fn/favorites/favorites-get-favorite-deals';
import { favoritesGetFavoriteOffers } from '../fn/favorites/favorites-get-favorite-offers';
import { FavoritesGetFavoriteOffers$Params } from '../fn/favorites/favorites-get-favorite-offers';
import { favoritesGetFavoriteOrganizations } from '../fn/favorites/favorites-get-favorite-organizations';
import { FavoritesGetFavoriteOrganizations$Params } from '../fn/favorites/favorites-get-favorite-organizations';
import { ApiMarketJsonResultOfFavoriteCountInfoDto } from '../models/api-market-json-result-of-favorite-count-info-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-market-organization-short-info-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-market-search-result-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class FavoritesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `favoritesGetFavoriteOffers()` */
  static readonly FavoritesGetFavoriteOffersPath = '/market/api/v1/favorite/offers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoritesGetFavoriteOffers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoritesGetFavoriteOffers$Response(params?: FavoritesGetFavoriteOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>> {
    return favoritesGetFavoriteOffers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `favoritesGetFavoriteOffers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoritesGetFavoriteOffers(params?: FavoritesGetFavoriteOffers$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto> {
    return this.favoritesGetFavoriteOffers$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto => r.body)
    );
  }

  /** Path part for operation `favoritesGetFavoriteOrganizations()` */
  static readonly FavoritesGetFavoriteOrganizationsPath = '/market/api/v1/favorite/organizations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoritesGetFavoriteOrganizations()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoritesGetFavoriteOrganizations$Response(params?: FavoritesGetFavoriteOrganizations$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto>> {
    return favoritesGetFavoriteOrganizations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `favoritesGetFavoriteOrganizations$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoritesGetFavoriteOrganizations(params?: FavoritesGetFavoriteOrganizations$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto> {
    return this.favoritesGetFavoriteOrganizations$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto => r.body)
    );
  }

  /** Path part for operation `favoritesGetFavoriteDeals()` */
  static readonly FavoritesGetFavoriteDealsPath = '/market/api/v1/favorite/deals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoritesGetFavoriteDeals()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoritesGetFavoriteDeals$Response(params?: FavoritesGetFavoriteDeals$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>> {
    return favoritesGetFavoriteDeals(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `favoritesGetFavoriteDeals$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoritesGetFavoriteDeals(params?: FavoritesGetFavoriteDeals$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto> {
    return this.favoritesGetFavoriteDeals$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto => r.body)
    );
  }

  /** Path part for operation `favoritesAddFavorite()` */
  static readonly FavoritesAddFavoritePath = '/market/api/v1/favorite/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoritesAddFavorite()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoritesAddFavorite$Response(params?: FavoritesAddFavorite$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return favoritesAddFavorite(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `favoritesAddFavorite$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoritesAddFavorite(params?: FavoritesAddFavorite$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.favoritesAddFavorite$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `favoritesDeleteFavorite()` */
  static readonly FavoritesDeleteFavoritePath = '/market/api/v1/favorite/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoritesDeleteFavorite()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoritesDeleteFavorite$Response(params?: FavoritesDeleteFavorite$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return favoritesDeleteFavorite(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `favoritesDeleteFavorite$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoritesDeleteFavorite(params?: FavoritesDeleteFavorite$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.favoritesDeleteFavorite$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `favoritesClearFavorite()` */
  static readonly FavoritesClearFavoritePath = '/market/api/v1/favorite/clear';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoritesClearFavorite()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoritesClearFavorite$Response(params: FavoritesClearFavorite$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return favoritesClearFavorite(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `favoritesClearFavorite$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoritesClearFavorite(params: FavoritesClearFavorite$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.favoritesClearFavorite$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `favoritesGetFavoriteCount()` */
  static readonly FavoritesGetFavoriteCountPath = '/market/api/v1/favorite/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoritesGetFavoriteCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoritesGetFavoriteCount$Response(params?: FavoritesGetFavoriteCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFavoriteCountInfoDto>> {
    return favoritesGetFavoriteCount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `favoritesGetFavoriteCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoritesGetFavoriteCount(params?: FavoritesGetFavoriteCount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFavoriteCountInfoDto> {
    return this.favoritesGetFavoriteCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFavoriteCountInfoDto>): ApiMarketJsonResultOfFavoriteCountInfoDto => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfListOfMzPriceListShortInfoDto } from '../models/api-market-json-result-of-list-of-mz-price-list-short-info-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-mz-price-list-dto';
import { ApiMarketJsonResultOfMzPriceListDto } from '../models/api-market-json-result-of-mz-price-list-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { priceListsBindPriceListToOrganization } from '../fn/price-lists/price-lists-bind-price-list-to-organization';
import { PriceListsBindPriceListToOrganization$Params } from '../fn/price-lists/price-lists-bind-price-list-to-organization';
import { priceListsChangePriceListState } from '../fn/price-lists/price-lists-change-price-list-state';
import { PriceListsChangePriceListState$Params } from '../fn/price-lists/price-lists-change-price-list-state';
import { priceListsCreateAutoUpdateAndImport } from '../fn/price-lists/price-lists-create-auto-update-and-import';
import { PriceListsCreateAutoUpdateAndImport$Params } from '../fn/price-lists/price-lists-create-auto-update-and-import';
import { priceListsCreateDefaultPriceListInternal } from '../fn/price-lists/price-lists-create-default-price-list-internal';
import { PriceListsCreateDefaultPriceListInternal$Params } from '../fn/price-lists/price-lists-create-default-price-list-internal';
import { priceListsCreatePriceList } from '../fn/price-lists/price-lists-create-price-list';
import { PriceListsCreatePriceList$Params } from '../fn/price-lists/price-lists-create-price-list';
import { priceListsEditPriceList } from '../fn/price-lists/price-lists-edit-price-list';
import { PriceListsEditPriceList$Params } from '../fn/price-lists/price-lists-edit-price-list';
import { priceListsGet } from '../fn/price-lists/price-lists-get';
import { PriceListsGet$Params } from '../fn/price-lists/price-lists-get';
import { priceListsGetActivePriceListsShortInfo } from '../fn/price-lists/price-lists-get-active-price-lists-short-info';
import { PriceListsGetActivePriceListsShortInfo$Params } from '../fn/price-lists/price-lists-get-active-price-lists-short-info';
import { priceListsGetAllPriceListsShortInfo } from '../fn/price-lists/price-lists-get-all-price-lists-short-info';
import { PriceListsGetAllPriceListsShortInfo$Params } from '../fn/price-lists/price-lists-get-all-price-lists-short-info';
import { priceListsGetPaginatedPriceLists } from '../fn/price-lists/price-lists-get-paginated-price-lists';
import { PriceListsGetPaginatedPriceLists$Params } from '../fn/price-lists/price-lists-get-paginated-price-lists';
import { priceListsManualPriceListUpdates } from '../fn/price-lists/price-lists-manual-price-list-updates';
import { PriceListsManualPriceListUpdates$Params } from '../fn/price-lists/price-lists-manual-price-list-updates';
import { priceListsManualRunPriceAutoUpdates } from '../fn/price-lists/price-lists-manual-run-price-auto-updates';
import { PriceListsManualRunPriceAutoUpdates$Params } from '../fn/price-lists/price-lists-manual-run-price-auto-updates';
import { priceListsRemovePriceList } from '../fn/price-lists/price-lists-remove-price-list';
import { PriceListsRemovePriceList$Params } from '../fn/price-lists/price-lists-remove-price-list';

@Injectable({ providedIn: 'root' })
export class PriceListsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `priceListsGet()` */
  static readonly PriceListsGetPath = '/market/api/v1/priceLists/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsGet$Response(params: PriceListsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMzPriceListDto>> {
    return priceListsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsGet(params: PriceListsGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMzPriceListDto> {
    return this.priceListsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMzPriceListDto>): ApiMarketJsonResultOfMzPriceListDto => r.body)
    );
  }

  /** Path part for operation `priceListsCreatePriceList()` */
  static readonly PriceListsCreatePriceListPath = '/market/api/v1/priceLists/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsCreatePriceList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsCreatePriceList$Response(params?: PriceListsCreatePriceList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMzPriceListDto>> {
    return priceListsCreatePriceList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsCreatePriceList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsCreatePriceList(params?: PriceListsCreatePriceList$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMzPriceListDto> {
    return this.priceListsCreatePriceList$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMzPriceListDto>): ApiMarketJsonResultOfMzPriceListDto => r.body)
    );
  }

  /** Path part for operation `priceListsCreateDefaultPriceListInternal()` */
  static readonly PriceListsCreateDefaultPriceListInternalPath = '/market/api/v1/priceLists/get-or-create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsCreateDefaultPriceListInternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsCreateDefaultPriceListInternal$Response(params?: PriceListsCreateDefaultPriceListInternal$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return priceListsCreateDefaultPriceListInternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsCreateDefaultPriceListInternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsCreateDefaultPriceListInternal(params?: PriceListsCreateDefaultPriceListInternal$Params, context?: HttpContext): Observable<number> {
    return this.priceListsCreateDefaultPriceListInternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `priceListsManualRunPriceAutoUpdates()` */
  static readonly PriceListsManualRunPriceAutoUpdatesPath = '/market/api/v1/priceLists/{id}/auto-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsManualRunPriceAutoUpdates()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsManualRunPriceAutoUpdates$Response(params: PriceListsManualRunPriceAutoUpdates$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return priceListsManualRunPriceAutoUpdates(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsManualRunPriceAutoUpdates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsManualRunPriceAutoUpdates(params: PriceListsManualRunPriceAutoUpdates$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.priceListsManualRunPriceAutoUpdates$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `priceListsManualPriceListUpdates()` */
  static readonly PriceListsManualPriceListUpdatesPath = '/market/api/v1/priceLists/{priceListId}/manual-yml-url-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsManualPriceListUpdates()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsManualPriceListUpdates$Response(params: PriceListsManualPriceListUpdates$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return priceListsManualPriceListUpdates(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsManualPriceListUpdates$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsManualPriceListUpdates(params: PriceListsManualPriceListUpdates$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.priceListsManualPriceListUpdates$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `priceListsCreateAutoUpdateAndImport()` */
  static readonly PriceListsCreateAutoUpdateAndImportPath = '/market/api/v1/priceLists/createOrUpdateAutoUpdateSchedule';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsCreateAutoUpdateAndImport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsCreateAutoUpdateAndImport$Response(params?: PriceListsCreateAutoUpdateAndImport$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return priceListsCreateAutoUpdateAndImport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsCreateAutoUpdateAndImport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsCreateAutoUpdateAndImport(params?: PriceListsCreateAutoUpdateAndImport$Params, context?: HttpContext): Observable<number> {
    return this.priceListsCreateAutoUpdateAndImport$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `priceListsEditPriceList()` */
  static readonly PriceListsEditPriceListPath = '/market/api/v1/priceLists/edit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsEditPriceList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsEditPriceList$Response(params?: PriceListsEditPriceList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMzPriceListDto>> {
    return priceListsEditPriceList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsEditPriceList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsEditPriceList(params?: PriceListsEditPriceList$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMzPriceListDto> {
    return this.priceListsEditPriceList$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMzPriceListDto>): ApiMarketJsonResultOfMzPriceListDto => r.body)
    );
  }

  /** Path part for operation `priceListsGetPaginatedPriceLists()` */
  static readonly PriceListsGetPaginatedPriceListsPath = '/market/api/v1/priceLists/my';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsGetPaginatedPriceLists()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsGetPaginatedPriceLists$Response(params?: PriceListsGetPaginatedPriceLists$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto>> {
    return priceListsGetPaginatedPriceLists(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsGetPaginatedPriceLists$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  priceListsGetPaginatedPriceLists(params?: PriceListsGetPaginatedPriceLists$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto> {
    return this.priceListsGetPaginatedPriceLists$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto => r.body)
    );
  }

  /** Path part for operation `priceListsGetAllPriceListsShortInfo()` */
  static readonly PriceListsGetAllPriceListsShortInfoPath = '/market/api/v1/priceLists/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsGetAllPriceListsShortInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsGetAllPriceListsShortInfo$Response(params?: PriceListsGetAllPriceListsShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMzPriceListShortInfoDto>> {
    return priceListsGetAllPriceListsShortInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsGetAllPriceListsShortInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsGetAllPriceListsShortInfo(params?: PriceListsGetAllPriceListsShortInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMzPriceListShortInfoDto> {
    return this.priceListsGetAllPriceListsShortInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMzPriceListShortInfoDto>): ApiMarketJsonResultOfListOfMzPriceListShortInfoDto => r.body)
    );
  }

  /** Path part for operation `priceListsGetActivePriceListsShortInfo()` */
  static readonly PriceListsGetActivePriceListsShortInfoPath = '/market/api/v1/priceLists/active';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsGetActivePriceListsShortInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsGetActivePriceListsShortInfo$Response(params?: PriceListsGetActivePriceListsShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMzPriceListShortInfoDto>> {
    return priceListsGetActivePriceListsShortInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsGetActivePriceListsShortInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsGetActivePriceListsShortInfo(params?: PriceListsGetActivePriceListsShortInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMzPriceListShortInfoDto> {
    return this.priceListsGetActivePriceListsShortInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMzPriceListShortInfoDto>): ApiMarketJsonResultOfListOfMzPriceListShortInfoDto => r.body)
    );
  }

  /** Path part for operation `priceListsRemovePriceList()` */
  static readonly PriceListsRemovePriceListPath = '/market/api/v1/priceLists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsRemovePriceList()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsRemovePriceList$Response(params: PriceListsRemovePriceList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return priceListsRemovePriceList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsRemovePriceList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsRemovePriceList(params: PriceListsRemovePriceList$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.priceListsRemovePriceList$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `priceListsChangePriceListState()` */
  static readonly PriceListsChangePriceListStatePath = '/market/api/v1/priceLists/{id}/changeState/{state}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsChangePriceListState()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsChangePriceListState$Response(params: PriceListsChangePriceListState$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return priceListsChangePriceListState(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsChangePriceListState$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsChangePriceListState(params: PriceListsChangePriceListState$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.priceListsChangePriceListState$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `priceListsBindPriceListToOrganization()` */
  static readonly PriceListsBindPriceListToOrganizationPath = '/market/api/v1/priceLists/{id}/bindPriceListToOrganization/{idOrganization}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `priceListsBindPriceListToOrganization()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsBindPriceListToOrganization$Response(params: PriceListsBindPriceListToOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return priceListsBindPriceListToOrganization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `priceListsBindPriceListToOrganization$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  priceListsBindPriceListToOrganization(params: PriceListsBindPriceListToOrganization$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.priceListsBindPriceListToOrganization$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}

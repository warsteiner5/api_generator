/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-stop-list-item-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-stop-list-item-extended-dto';
import { stopListItemBanSupplier } from '../fn/stop-list-item/stop-list-item-ban-supplier';
import { StopListItemBanSupplier$Params } from '../fn/stop-list-item/stop-list-item-ban-supplier';
import { stopListItemCheckIfBanned } from '../fn/stop-list-item/stop-list-item-check-if-banned';
import { StopListItemCheckIfBanned$Params } from '../fn/stop-list-item/stop-list-item-check-if-banned';
import { stopListItemCheckIfIamBanned } from '../fn/stop-list-item/stop-list-item-check-if-iam-banned';
import { StopListItemCheckIfIamBanned$Params } from '../fn/stop-list-item/stop-list-item-check-if-iam-banned';
import { stopListItemGetPaginateStopListItemExtetndeds } from '../fn/stop-list-item/stop-list-item-get-paginate-stop-list-item-extetndeds';
import { StopListItemGetPaginateStopListItemExtetndeds$Params } from '../fn/stop-list-item/stop-list-item-get-paginate-stop-list-item-extetndeds';
import { stopListItemGetPaginateStopListItems } from '../fn/stop-list-item/stop-list-item-get-paginate-stop-list-items';
import { StopListItemGetPaginateStopListItems$Params } from '../fn/stop-list-item/stop-list-item-get-paginate-stop-list-items';
import { stopListItemUnbanSupplier } from '../fn/stop-list-item/stop-list-item-unban-supplier';
import { StopListItemUnbanSupplier$Params } from '../fn/stop-list-item/stop-list-item-unban-supplier';
import { stopListItemUnbanSupplierTotal } from '../fn/stop-list-item/stop-list-item-unban-supplier-total';
import { StopListItemUnbanSupplierTotal$Params } from '../fn/stop-list-item/stop-list-item-unban-supplier-total';

@Injectable({ providedIn: 'root' })
export class StopListItemApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `stopListItemGetPaginateStopListItems()` */
  static readonly StopListItemGetPaginateStopListItemsPath = '/bla-bla-vla/stoplistitem';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `stopListItemGetPaginateStopListItems()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  stopListItemGetPaginateStopListItems$Response(params?: StopListItemGetPaginateStopListItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto>> {
    return stopListItemGetPaginateStopListItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `stopListItemGetPaginateStopListItems$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  stopListItemGetPaginateStopListItems(params?: StopListItemGetPaginateStopListItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto> {
    return this.stopListItemGetPaginateStopListItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto => r.body)
    );
  }

  /** Path part for operation `stopListItemGetPaginateStopListItemExtetndeds()` */
  static readonly StopListItemGetPaginateStopListItemExtetndedsPath = '/bla-bla-vla/stoplistitem/getFullInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `stopListItemGetPaginateStopListItemExtetndeds()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  stopListItemGetPaginateStopListItemExtetndeds$Response(params?: StopListItemGetPaginateStopListItemExtetndeds$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto>> {
    return stopListItemGetPaginateStopListItemExtetndeds(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `stopListItemGetPaginateStopListItemExtetndeds$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  stopListItemGetPaginateStopListItemExtetndeds(params?: StopListItemGetPaginateStopListItemExtetndeds$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto> {
    return this.stopListItemGetPaginateStopListItemExtetndeds$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto => r.body)
    );
  }

  /** Path part for operation `stopListItemBanSupplier()` */
  static readonly StopListItemBanSupplierPath = '/bla-bla-vla/stoplistitem/ban';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `stopListItemBanSupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  stopListItemBanSupplier$Response(params?: StopListItemBanSupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return stopListItemBanSupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `stopListItemBanSupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  stopListItemBanSupplier(params?: StopListItemBanSupplier$Params, context?: HttpContext): Observable<number> {
    return this.stopListItemBanSupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `stopListItemUnbanSupplier()` */
  static readonly StopListItemUnbanSupplierPath = '/bla-bla-vla/stoplistitem/unban';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `stopListItemUnbanSupplier()` instead.
   *
   * This method doesn't expect any request body.
   */
  stopListItemUnbanSupplier$Response(params: StopListItemUnbanSupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return stopListItemUnbanSupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `stopListItemUnbanSupplier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  stopListItemUnbanSupplier(params: StopListItemUnbanSupplier$Params, context?: HttpContext): Observable<Blob> {
    return this.stopListItemUnbanSupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `stopListItemUnbanSupplierTotal()` */
  static readonly StopListItemUnbanSupplierTotalPath = '/bla-bla-vla/stoplistitem/unbanTotal/{supplierId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `stopListItemUnbanSupplierTotal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  stopListItemUnbanSupplierTotal$Response(params: StopListItemUnbanSupplierTotal$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return stopListItemUnbanSupplierTotal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `stopListItemUnbanSupplierTotal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  stopListItemUnbanSupplierTotal(params: StopListItemUnbanSupplierTotal$Params, context?: HttpContext): Observable<Blob> {
    return this.stopListItemUnbanSupplierTotal$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `stopListItemCheckIfBanned()` */
  static readonly StopListItemCheckIfBannedPath = '/bla-bla-vla/stoplistitem/checkIfSupplierBanned/{supplierId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `stopListItemCheckIfBanned()` instead.
   *
   * This method doesn't expect any request body.
   */
  stopListItemCheckIfBanned$Response(params: StopListItemCheckIfBanned$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return stopListItemCheckIfBanned(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `stopListItemCheckIfBanned$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  stopListItemCheckIfBanned(params: StopListItemCheckIfBanned$Params, context?: HttpContext): Observable<boolean> {
    return this.stopListItemCheckIfBanned$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `stopListItemCheckIfIamBanned()` */
  static readonly StopListItemCheckIfIamBannedPath = '/bla-bla-vla/stoplistitem/checkIfBannedBy/{customerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `stopListItemCheckIfIamBanned()` instead.
   *
   * This method doesn't expect any request body.
   */
  stopListItemCheckIfIamBanned$Response(params: StopListItemCheckIfIamBanned$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return stopListItemCheckIfIamBanned(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `stopListItemCheckIfIamBanned$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  stopListItemCheckIfIamBanned(params: StopListItemCheckIfIamBanned$Params, context?: HttpContext): Observable<boolean> {
    return this.stopListItemCheckIfIamBanned$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

}

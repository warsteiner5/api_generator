/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-moderation-price-list-search-item-dto';
import { moderatorGetPriceListsByFilter } from '../fn/moderator/moderator-get-price-lists-by-filter';
import { ModeratorGetPriceListsByFilter$Params } from '../fn/moderator/moderator-get-price-lists-by-filter';
import { moderatorStart } from '../fn/moderator/moderator-start';
import { ModeratorStart$Params } from '../fn/moderator/moderator-start';
import { moderatorStop } from '../fn/moderator/moderator-stop';
import { ModeratorStop$Params } from '../fn/moderator/moderator-stop';

@Injectable({ providedIn: 'root' })
export class ModeratorApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `moderatorGetPriceListsByFilter()` */
  static readonly ModeratorGetPriceListsByFilterPath = '/market/api/v1/moderator/pricelists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `moderatorGetPriceListsByFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  moderatorGetPriceListsByFilter$Response(params?: ModeratorGetPriceListsByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto>> {
    return moderatorGetPriceListsByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `moderatorGetPriceListsByFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  moderatorGetPriceListsByFilter(params?: ModeratorGetPriceListsByFilter$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto> {
    return this.moderatorGetPriceListsByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto => r.body)
    );
  }

  /** Path part for operation `moderatorStart()` */
  static readonly ModeratorStartPath = '/market/api/v1/moderator/{id}/start';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `moderatorStart()` instead.
   *
   * This method doesn't expect any request body.
   */
  moderatorStart$Response(params: ModeratorStart$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return moderatorStart(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `moderatorStart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  moderatorStart(params: ModeratorStart$Params, context?: HttpContext): Observable<Blob> {
    return this.moderatorStart$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `moderatorStop()` */
  static readonly ModeratorStopPath = '/market/api/v1/moderator/{id}/stop';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `moderatorStop()` instead.
   *
   * This method doesn't expect any request body.
   */
  moderatorStop$Response(params: ModeratorStop$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return moderatorStop(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `moderatorStop$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  moderatorStop(params: ModeratorStop$Params, context?: HttpContext): Observable<Blob> {
    return this.moderatorStop$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

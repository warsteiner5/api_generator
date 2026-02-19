/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { filterDelete } from '../fn/filter/filter-delete';
import { FilterDelete$Params } from '../fn/filter/filter-delete';
import { filterDisableBanner } from '../fn/filter/filter-disable-banner';
import { FilterDisableBanner$Params } from '../fn/filter/filter-disable-banner';
import { filterFindMyFilledFilters } from '../fn/filter/filter-find-my-filled-filters';
import { FilterFindMyFilledFilters$Params } from '../fn/filter/filter-find-my-filled-filters';
import { filterGetBannerActivity } from '../fn/filter/filter-get-banner-activity';
import { FilterGetBannerActivity$Params } from '../fn/filter/filter-get-banner-activity';
import { filterGetFilterByGuid } from '../fn/filter/filter-get-filter-by-guid';
import { FilterGetFilterByGuid$Params } from '../fn/filter/filter-get-filter-by-guid';
import { filterGetFilterModel } from '../fn/filter/filter-get-filter-model';
import { FilterGetFilterModel$Params } from '../fn/filter/filter-get-filter-model';
import { filterSaveFilter } from '../fn/filter/filter-save-filter';
import { FilterSaveFilter$Params } from '../fn/filter/filter-save-filter';
import { filterUpdateFilter } from '../fn/filter/filter-update-filter';
import { FilterUpdateFilter$Params } from '../fn/filter/filter-update-filter';
import { ApiMarketJsonResultOfBooleanAltDto } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfFilterObjectAltDto } from '../models/api-market-json-result-of-filter-object';
import { ApiMarketJsonResultOfIntegerAltDto } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObjectAltDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-filter-object';
import { ApiMarketJsonResultOfMarketSearchRawModelAltDto } from '../models/api-market-json-result-of-market-search-raw-model';

@Injectable({ providedIn: 'root' })
export class FilterApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `filterGetFilterModel()` */
  static readonly FilterGetFilterModelPath = '/market/api/v1/filters/model';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filterGetFilterModel()` instead.
   *
   * This method doesn't expect any request body.
   */
  filterGetFilterModel$Response(params?: FilterGetFilterModel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketSearchRawModelAltDto>> {
    return filterGetFilterModel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filterGetFilterModel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filterGetFilterModel(params?: FilterGetFilterModel$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketSearchRawModelAltDto> {
    return this.filterGetFilterModel$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketSearchRawModelAltDto>): ApiMarketJsonResultOfMarketSearchRawModelAltDto => r.body)
    );
  }

  /** Path part for operation `filterGetFilterByGuid()` */
  static readonly FilterGetFilterByGuidPath = '/market/api/v1/filters/byguid/{guid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filterGetFilterByGuid()` instead.
   *
   * This method doesn't expect any request body.
   */
  filterGetFilterByGuid$Response(params: FilterGetFilterByGuid$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFilterObjectAltDto>> {
    return filterGetFilterByGuid(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filterGetFilterByGuid$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filterGetFilterByGuid(params: FilterGetFilterByGuid$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFilterObjectAltDto> {
    return this.filterGetFilterByGuid$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFilterObjectAltDto>): ApiMarketJsonResultOfFilterObjectAltDto => r.body)
    );
  }

  /** Path part for operation `filterUpdateFilter()` */
  static readonly FilterUpdateFilterPath = '/market/api/v1/filters/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filterUpdateFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filterUpdateFilter$Response(params: FilterUpdateFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return filterUpdateFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filterUpdateFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filterUpdateFilter(params: FilterUpdateFilter$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.filterUpdateFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `filterDelete()` */
  static readonly FilterDeletePath = '/market/api/v1/filters/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filterDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  filterDelete$Response(params: FilterDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return filterDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filterDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filterDelete(params: FilterDelete$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.filterDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `filterFindMyFilledFilters()` */
  static readonly FilterFindMyFilledFiltersPath = '/market/api/v1/filters/my/filled';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filterFindMyFilledFilters()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filterFindMyFilledFilters$Response(params?: FilterFindMyFilledFilters$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObjectAltDto>> {
    return filterFindMyFilledFilters(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filterFindMyFilledFilters$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filterFindMyFilledFilters(params?: FilterFindMyFilledFilters$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObjectAltDto> {
    return this.filterFindMyFilledFilters$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObjectAltDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObjectAltDto => r.body)
    );
  }

  /** Path part for operation `filterSaveFilter()` */
  static readonly FilterSaveFilterPath = '/market/api/v1/filters/save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filterSaveFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filterSaveFilter$Response(params?: FilterSaveFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return filterSaveFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filterSaveFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filterSaveFilter(params?: FilterSaveFilter$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.filterSaveFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `filterGetBannerActivity()` */
  static readonly FilterGetBannerActivityPath = '/market/api/v1/filters/banner/isactive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filterGetBannerActivity()` instead.
   *
   * This method doesn't expect any request body.
   */
  filterGetBannerActivity$Response(params?: FilterGetBannerActivity$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return filterGetBannerActivity(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filterGetBannerActivity$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filterGetBannerActivity(params?: FilterGetBannerActivity$Params, context?: HttpContext): Observable<Blob> {
    return this.filterGetBannerActivity$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `filterDisableBanner()` */
  static readonly FilterDisableBannerPath = '/market/api/v1/filters/banner/disable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filterDisableBanner()` instead.
   *
   * This method doesn't expect any request body.
   */
  filterDisableBanner$Response(params?: FilterDisableBanner$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return filterDisableBanner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filterDisableBanner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filterDisableBanner(params?: FilterDisableBanner$Params, context?: HttpContext): Observable<Blob> {
    return this.filterDisableBanner$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

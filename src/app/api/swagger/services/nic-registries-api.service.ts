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
import { ApiMarketJsonResultOfIntegerAltDto } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-nic-registry-grid-dto';
import { ApiMarketJsonResultOfNicRegistryEntryDto } from '../models/api-market-json-result-of-nic-registry-entry-dto';
import { ApiMarketJsonResultOfNicRegistryTradeInfoDto } from '../models/api-market-json-result-of-nic-registry-trade-info-dto';
import { nicRegistriesDelete } from '../fn/nic-registries/nic-registries-delete';
import { NicRegistriesDelete$Params } from '../fn/nic-registries/nic-registries-delete';
import { nicRegistriesFindMyTrade } from '../fn/nic-registries/nic-registries-find-my-trade';
import { NicRegistriesFindMyTrade$Params } from '../fn/nic-registries/nic-registries-find-my-trade';
import { nicRegistriesGetAgreementForCurrentUser } from '../fn/nic-registries/nic-registries-get-agreement-for-current-user';
import { NicRegistriesGetAgreementForCurrentUser$Params } from '../fn/nic-registries/nic-registries-get-agreement-for-current-user';
import { nicRegistriesGetById } from '../fn/nic-registries/nic-registries-get-by-id';
import { NicRegistriesGetById$Params } from '../fn/nic-registries/nic-registries-get-by-id';
import { nicRegistriesGetModelForCreate } from '../fn/nic-registries/nic-registries-get-model-for-create';
import { NicRegistriesGetModelForCreate$Params } from '../fn/nic-registries/nic-registries-get-model-for-create';
import { nicRegistriesSave } from '../fn/nic-registries/nic-registries-save';
import { NicRegistriesSave$Params } from '../fn/nic-registries/nic-registries-save';
import { nicRegistriesSearch } from '../fn/nic-registries/nic-registries-search';
import { NicRegistriesSearch$Params } from '../fn/nic-registries/nic-registries-search';

@Injectable({ providedIn: 'root' })
export class NicRegistriesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `nicRegistriesSearch()` */
  static readonly NicRegistriesSearchPath = '/api/NicRegistry/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistriesSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  nicRegistriesSearch$Response(params?: NicRegistriesSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto>> {
    return nicRegistriesSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistriesSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  nicRegistriesSearch(params?: NicRegistriesSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto> {
    return this.nicRegistriesSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto => r.body)
    );
  }

  /** Path part for operation `nicRegistriesGetById()` */
  static readonly NicRegistriesGetByIdPath = '/api/NicRegistry/{entryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistriesGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistriesGetById$Response(params: NicRegistriesGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return nicRegistriesGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistriesGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistriesGetById(params: NicRegistriesGetById$Params, context?: HttpContext): Observable<Blob> {
    return this.nicRegistriesGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `nicRegistriesGetModelForCreate()` */
  static readonly NicRegistriesGetModelForCreatePath = '/api/NicRegistry/empty';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistriesGetModelForCreate()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistriesGetModelForCreate$Response(params?: NicRegistriesGetModelForCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNicRegistryEntryDto>> {
    return nicRegistriesGetModelForCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistriesGetModelForCreate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistriesGetModelForCreate(params?: NicRegistriesGetModelForCreate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfNicRegistryEntryDto> {
    return this.nicRegistriesGetModelForCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfNicRegistryEntryDto>): ApiMarketJsonResultOfNicRegistryEntryDto => r.body)
    );
  }

  /** Path part for operation `nicRegistriesSave()` */
  static readonly NicRegistriesSavePath = '/api/NicRegistry/save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistriesSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  nicRegistriesSave$Response(params?: NicRegistriesSave$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return nicRegistriesSave(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistriesSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  nicRegistriesSave(params?: NicRegistriesSave$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.nicRegistriesSave$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `nicRegistriesDelete()` */
  static readonly NicRegistriesDeletePath = '/api/NicRegistry/{entryId}/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistriesDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistriesDelete$Response(params: NicRegistriesDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return nicRegistriesDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistriesDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistriesDelete(params: NicRegistriesDelete$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.nicRegistriesDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `nicRegistriesFindMyTrade()` */
  static readonly NicRegistriesFindMyTradePath = '/api/NicRegistry/trade/{tradeNumber}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistriesFindMyTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistriesFindMyTrade$Response(params: NicRegistriesFindMyTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNicRegistryTradeInfoDto>> {
    return nicRegistriesFindMyTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistriesFindMyTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistriesFindMyTrade(params: NicRegistriesFindMyTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfNicRegistryTradeInfoDto> {
    return this.nicRegistriesFindMyTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfNicRegistryTradeInfoDto>): ApiMarketJsonResultOfNicRegistryTradeInfoDto => r.body)
    );
  }

  /** Path part for operation `nicRegistriesGetAgreementForCurrentUser()` */
  static readonly NicRegistriesGetAgreementForCurrentUserPath = '/api/NicRegistry/agreement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistriesGetAgreementForCurrentUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistriesGetAgreementForCurrentUser$Response(params?: NicRegistriesGetAgreementForCurrentUser$Params, context?: HttpContext): Observable<StrictHttpResponse<string | null>> {
    return nicRegistriesGetAgreementForCurrentUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistriesGetAgreementForCurrentUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistriesGetAgreementForCurrentUser(params?: NicRegistriesGetAgreementForCurrentUser$Params, context?: HttpContext): Observable<string | null> {
    return this.nicRegistriesGetAgreementForCurrentUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<string | null>): string | null => r.body)
    );
  }

}

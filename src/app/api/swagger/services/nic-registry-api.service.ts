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
import { nicRegistryDelete } from '../fn/nic-registry/nic-registry-delete';
import { NicRegistryDelete$Params } from '../fn/nic-registry/nic-registry-delete';
import { nicRegistryFindMyTrade } from '../fn/nic-registry/nic-registry-find-my-trade';
import { NicRegistryFindMyTrade$Params } from '../fn/nic-registry/nic-registry-find-my-trade';
import { nicRegistryGetAgreementForCurrentUser } from '../fn/nic-registry/nic-registry-get-agreement-for-current-user';
import { NicRegistryGetAgreementForCurrentUser$Params } from '../fn/nic-registry/nic-registry-get-agreement-for-current-user';
import { nicRegistryGetById } from '../fn/nic-registry/nic-registry-get-by-id';
import { NicRegistryGetById$Params } from '../fn/nic-registry/nic-registry-get-by-id';
import { nicRegistryGetModelForCreate } from '../fn/nic-registry/nic-registry-get-model-for-create';
import { NicRegistryGetModelForCreate$Params } from '../fn/nic-registry/nic-registry-get-model-for-create';
import { nicRegistrySave } from '../fn/nic-registry/nic-registry-save';
import { NicRegistrySave$Params } from '../fn/nic-registry/nic-registry-save';
import { nicRegistrySearch } from '../fn/nic-registry/nic-registry-search';
import { NicRegistrySearch$Params } from '../fn/nic-registry/nic-registry-search';

@Injectable({ providedIn: 'root' })
export class NicRegistryApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `nicRegistrySearch()` */
  static readonly NicRegistrySearchPath = '/market/api/v1/registry/nic/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistrySearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  nicRegistrySearch$Response(params?: NicRegistrySearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto>> {
    return nicRegistrySearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistrySearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  nicRegistrySearch(params?: NicRegistrySearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto> {
    return this.nicRegistrySearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGridDto => r.body)
    );
  }

  /** Path part for operation `nicRegistryGetById()` */
  static readonly NicRegistryGetByIdPath = '/market/api/v1/registry/nic/{entryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistryGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistryGetById$Response(params: NicRegistryGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNicRegistryEntryDto>> {
    return nicRegistryGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistryGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistryGetById(params: NicRegistryGetById$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfNicRegistryEntryDto> {
    return this.nicRegistryGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfNicRegistryEntryDto>): ApiMarketJsonResultOfNicRegistryEntryDto => r.body)
    );
  }

  /** Path part for operation `nicRegistryGetModelForCreate()` */
  static readonly NicRegistryGetModelForCreatePath = '/market/api/v1/registry/nic/empty';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistryGetModelForCreate()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistryGetModelForCreate$Response(params?: NicRegistryGetModelForCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNicRegistryEntryDto>> {
    return nicRegistryGetModelForCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistryGetModelForCreate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistryGetModelForCreate(params?: NicRegistryGetModelForCreate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfNicRegistryEntryDto> {
    return this.nicRegistryGetModelForCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfNicRegistryEntryDto>): ApiMarketJsonResultOfNicRegistryEntryDto => r.body)
    );
  }

  /** Path part for operation `nicRegistrySave()` */
  static readonly NicRegistrySavePath = '/market/api/v1/registry/nic/save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistrySave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  nicRegistrySave$Response(params?: NicRegistrySave$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return nicRegistrySave(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistrySave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  nicRegistrySave(params?: NicRegistrySave$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.nicRegistrySave$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `nicRegistryDelete()` */
  static readonly NicRegistryDeletePath = '/market/api/v1/registry/nic/{entryId}/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistryDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistryDelete$Response(params: NicRegistryDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return nicRegistryDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistryDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistryDelete(params: NicRegistryDelete$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.nicRegistryDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `nicRegistryFindMyTrade()` */
  static readonly NicRegistryFindMyTradePath = '/market/api/v1/registry/nic/trade/{tradeNumber}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistryFindMyTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistryFindMyTrade$Response(params: NicRegistryFindMyTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNicRegistryTradeInfoDto>> {
    return nicRegistryFindMyTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistryFindMyTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistryFindMyTrade(params: NicRegistryFindMyTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfNicRegistryTradeInfoDto> {
    return this.nicRegistryFindMyTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfNicRegistryTradeInfoDto>): ApiMarketJsonResultOfNicRegistryTradeInfoDto => r.body)
    );
  }

  /** Path part for operation `nicRegistryGetAgreementForCurrentUser()` */
  static readonly NicRegistryGetAgreementForCurrentUserPath = '/market/api/v1/registry/nic/agreement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nicRegistryGetAgreementForCurrentUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistryGetAgreementForCurrentUser$Response(params?: NicRegistryGetAgreementForCurrentUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return nicRegistryGetAgreementForCurrentUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nicRegistryGetAgreementForCurrentUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nicRegistryGetAgreementForCurrentUser(params?: NicRegistryGetAgreementForCurrentUser$Params, context?: HttpContext): Observable<Blob> {
    return this.nicRegistryGetAgreementForCurrentUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfIntegerAltDto } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfListOfPartnerRequestDto } from '../models/api-market-json-result-of-list-of-partner-request-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-partner-dto';
import { ApiMarketJsonResultOfPartnerOrganizationDto } from '../models/api-market-json-result-of-partner-organization-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { partnersAccept } from '../fn/partners/partners-accept';
import { PartnersAccept$Params } from '../fn/partners/partners-accept';
import { partnersAdd } from '../fn/partners/partners-add';
import { PartnersAdd$Params } from '../fn/partners/partners-add';
import { partnersDelete } from '../fn/partners/partners-delete';
import { PartnersDelete$Params } from '../fn/partners/partners-delete';
import { partnersGetActiveRequests } from '../fn/partners/partners-get-active-requests';
import { PartnersGetActiveRequests$Params } from '../fn/partners/partners-get-active-requests';
import { partnersGetActiveRequestsCount } from '../fn/partners/partners-get-active-requests-count';
import { PartnersGetActiveRequestsCount$Params } from '../fn/partners/partners-get-active-requests-count';
import { partnersGetOrganizationInfoByInnAndKpp } from '../fn/partners/partners-get-organization-info-by-inn-and-kpp';
import { PartnersGetOrganizationInfoByInnAndKpp$Params } from '../fn/partners/partners-get-organization-info-by-inn-and-kpp';
import { partnersRefuse } from '../fn/partners/partners-refuse';
import { PartnersRefuse$Params } from '../fn/partners/partners-refuse';
import { partnersSearch } from '../fn/partners/partners-search';
import { PartnersSearch$Params } from '../fn/partners/partners-search';
import { partnersSendRequest } from '../fn/partners/partners-send-request';
import { PartnersSendRequest$Params } from '../fn/partners/partners-send-request';

@Injectable({ providedIn: 'root' })
export class PartnersApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `partnersSearch()` */
  static readonly PartnersSearchPath = '/market/api/v1/organization/partners/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partnersSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partnersSearch$Response(params?: PartnersSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto>> {
    return partnersSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partnersSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partnersSearch(params?: PartnersSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto> {
    return this.partnersSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto => r.body)
    );
  }

  /** Path part for operation `partnersAdd()` */
  static readonly PartnersAddPath = '/market/api/v1/organization/partners';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partnersAdd()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersAdd$Response(params: PartnersAdd$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return partnersAdd(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partnersAdd$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersAdd(params: PartnersAdd$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.partnersAdd$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `partnersDelete()` */
  static readonly PartnersDeletePath = '/market/api/v1/organization/partners/{guid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partnersDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersDelete$Response(params: PartnersDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return partnersDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partnersDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersDelete(params: PartnersDelete$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.partnersDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `partnersSendRequest()` */
  static readonly PartnersSendRequestPath = '/market/api/v1/organization/partners/{guid}/request';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partnersSendRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersSendRequest$Response(params: PartnersSendRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return partnersSendRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partnersSendRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersSendRequest(params: PartnersSendRequest$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.partnersSendRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `partnersAccept()` */
  static readonly PartnersAcceptPath = '/market/api/v1/organization/partners/{id}/accept';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partnersAccept()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersAccept$Response(params: PartnersAccept$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return partnersAccept(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partnersAccept$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersAccept(params: PartnersAccept$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.partnersAccept$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `partnersRefuse()` */
  static readonly PartnersRefusePath = '/market/api/v1/organization/partners/{id}/refuse';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partnersRefuse()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersRefuse$Response(params: PartnersRefuse$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return partnersRefuse(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partnersRefuse$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersRefuse(params: PartnersRefuse$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.partnersRefuse$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `partnersGetOrganizationInfoByInnAndKpp()` */
  static readonly PartnersGetOrganizationInfoByInnAndKppPath = '/market/api/v1/organization/partners/info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partnersGetOrganizationInfoByInnAndKpp()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersGetOrganizationInfoByInnAndKpp$Response(params: PartnersGetOrganizationInfoByInnAndKpp$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPartnerOrganizationDto>> {
    return partnersGetOrganizationInfoByInnAndKpp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partnersGetOrganizationInfoByInnAndKpp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersGetOrganizationInfoByInnAndKpp(params: PartnersGetOrganizationInfoByInnAndKpp$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPartnerOrganizationDto> {
    return this.partnersGetOrganizationInfoByInnAndKpp$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPartnerOrganizationDto>): ApiMarketJsonResultOfPartnerOrganizationDto => r.body)
    );
  }

  /** Path part for operation `partnersGetActiveRequestsCount()` */
  static readonly PartnersGetActiveRequestsCountPath = '/market/api/v1/organization/partners/requests/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partnersGetActiveRequestsCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersGetActiveRequestsCount$Response(params?: PartnersGetActiveRequestsCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return partnersGetActiveRequestsCount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partnersGetActiveRequestsCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersGetActiveRequestsCount(params?: PartnersGetActiveRequestsCount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.partnersGetActiveRequestsCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `partnersGetActiveRequests()` */
  static readonly PartnersGetActiveRequestsPath = '/market/api/v1/organization/partners/requests';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partnersGetActiveRequests()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersGetActiveRequests$Response(params?: PartnersGetActiveRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfPartnerRequestDto>> {
    return partnersGetActiveRequests(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partnersGetActiveRequests$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partnersGetActiveRequests(params?: PartnersGetActiveRequests$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfPartnerRequestDto> {
    return this.partnersGetActiveRequests$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfPartnerRequestDto>): ApiMarketJsonResultOfListOfPartnerRequestDto => r.body)
    );
  }

}

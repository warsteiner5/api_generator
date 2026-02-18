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
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-role-item-response-dto';
import { ApiMarketJsonResultOfRoleDetailResponse } from '../models/api-market-json-result-of-role-detail-response';
import { rolesActivateRole } from '../fn/roles/roles-activate-role';
import { RolesActivateRole$Params } from '../fn/roles/roles-activate-role';
import { rolesCreateRole } from '../fn/roles/roles-create-role';
import { RolesCreateRole$Params } from '../fn/roles/roles-create-role';
import { rolesDeactivateRole } from '../fn/roles/roles-deactivate-role';
import { RolesDeactivateRole$Params } from '../fn/roles/roles-deactivate-role';
import { rolesDeleteRole } from '../fn/roles/roles-delete-role';
import { RolesDeleteRole$Params } from '../fn/roles/roles-delete-role';
import { rolesGetRole } from '../fn/roles/roles-get-role';
import { RolesGetRole$Params } from '../fn/roles/roles-get-role';
import { rolesGetRoleInitial } from '../fn/roles/roles-get-role-initial';
import { RolesGetRoleInitial$Params } from '../fn/roles/roles-get-role-initial';
import { rolesSearchRoles } from '../fn/roles/roles-search-roles';
import { RolesSearchRoles$Params } from '../fn/roles/roles-search-roles';
import { rolesUpdateRole } from '../fn/roles/roles-update-role';
import { RolesUpdateRole$Params } from '../fn/roles/roles-update-role';

@Injectable({ providedIn: 'root' })
export class RolesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `rolesSearchRoles()` */
  static readonly RolesSearchRolesPath = '/bla-bla-vla/security/roles/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesSearchRoles()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rolesSearchRoles$Response(params?: RolesSearchRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto>> {
    return rolesSearchRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesSearchRoles$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rolesSearchRoles(params?: RolesSearchRoles$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto> {
    return this.rolesSearchRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto => r.body)
    );
  }

  /** Path part for operation `rolesGetRoleInitial()` */
  static readonly RolesGetRoleInitialPath = '/bla-bla-vla/security/roles/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesGetRoleInitial()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesGetRoleInitial$Response(params?: RolesGetRoleInitial$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRoleDetailResponse>> {
    return rolesGetRoleInitial(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesGetRoleInitial$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesGetRoleInitial(params?: RolesGetRoleInitial$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfRoleDetailResponse> {
    return this.rolesGetRoleInitial$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfRoleDetailResponse>): ApiMarketJsonResultOfRoleDetailResponse => r.body)
    );
  }

  /** Path part for operation `rolesGetRole()` */
  static readonly RolesGetRolePath = '/bla-bla-vla/security/roles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesGetRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesGetRole$Response(params: RolesGetRole$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRoleDetailResponse>> {
    return rolesGetRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesGetRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesGetRole(params: RolesGetRole$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfRoleDetailResponse> {
    return this.rolesGetRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfRoleDetailResponse>): ApiMarketJsonResultOfRoleDetailResponse => r.body)
    );
  }

  /** Path part for operation `rolesUpdateRole()` */
  static readonly RolesUpdateRolePath = '/bla-bla-vla/security/roles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesUpdateRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rolesUpdateRole$Response(params: RolesUpdateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return rolesUpdateRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesUpdateRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rolesUpdateRole(params: RolesUpdateRole$Params, context?: HttpContext): Observable<Blob> {
    return this.rolesUpdateRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `rolesDeleteRole()` */
  static readonly RolesDeleteRolePath = '/bla-bla-vla/security/roles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesDeleteRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesDeleteRole$Response(params: RolesDeleteRole$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return rolesDeleteRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesDeleteRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesDeleteRole(params: RolesDeleteRole$Params, context?: HttpContext): Observable<Blob> {
    return this.rolesDeleteRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `rolesCreateRole()` */
  static readonly RolesCreateRolePath = '/bla-bla-vla/security/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesCreateRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rolesCreateRole$Response(params?: RolesCreateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return rolesCreateRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesCreateRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rolesCreateRole(params?: RolesCreateRole$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.rolesCreateRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `rolesActivateRole()` */
  static readonly RolesActivateRolePath = '/bla-bla-vla/security/roles/{id}/activate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesActivateRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesActivateRole$Response(params: RolesActivateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return rolesActivateRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesActivateRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesActivateRole(params: RolesActivateRole$Params, context?: HttpContext): Observable<Blob> {
    return this.rolesActivateRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `rolesDeactivateRole()` */
  static readonly RolesDeactivateRolePath = '/bla-bla-vla/security/roles/{id}/deactivate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesDeactivateRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesDeactivateRole$Response(params: RolesDeactivateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return rolesDeactivateRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesDeactivateRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesDeactivateRole(params: RolesDeactivateRole$Params, context?: HttpContext): Observable<Blob> {
    return this.rolesDeactivateRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

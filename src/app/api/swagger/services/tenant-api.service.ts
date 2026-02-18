/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { tenantCheckTenantPpIntegration } from '../fn/tenant/tenant-check-tenant-pp-integration';
import { TenantCheckTenantPpIntegration$Params } from '../fn/tenant/tenant-check-tenant-pp-integration';
import { tenantGetGlobalMarketTenantHost } from '../fn/tenant/tenant-get-global-market-tenant-host';
import { TenantGetGlobalMarketTenantHost$Params } from '../fn/tenant/tenant-get-global-market-tenant-host';
import { tenantGetParticipantLoginRedirectTenantHost } from '../fn/tenant/tenant-get-participant-login-redirect-tenant-host';
import { TenantGetParticipantLoginRedirectTenantHost$Params } from '../fn/tenant/tenant-get-participant-login-redirect-tenant-host';
import { tenantGetTenantHost } from '../fn/tenant/tenant-get-tenant-host';
import { TenantGetTenantHost$Params } from '../fn/tenant/tenant-get-tenant-host';

@Injectable({ providedIn: 'root' })
export class TenantApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tenantCheckTenantPpIntegration()` */
  static readonly TenantCheckTenantPpIntegrationPath = '/api/Tenant/checkTenantPPIntegration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantCheckTenantPpIntegration()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantCheckTenantPpIntegration$Response(params: TenantCheckTenantPpIntegration$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tenantCheckTenantPpIntegration(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantCheckTenantPpIntegration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantCheckTenantPpIntegration(params: TenantCheckTenantPpIntegration$Params, context?: HttpContext): Observable<Blob> {
    return this.tenantCheckTenantPpIntegration$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tenantGetTenantHost()` */
  static readonly TenantGetTenantHostPath = '/api/Tenant/getTenantHost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGetTenantHost()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGetTenantHost$Response(params: TenantGetTenantHost$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tenantGetTenantHost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantGetTenantHost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGetTenantHost(params: TenantGetTenantHost$Params, context?: HttpContext): Observable<Blob> {
    return this.tenantGetTenantHost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tenantGetGlobalMarketTenantHost()` */
  static readonly TenantGetGlobalMarketTenantHostPath = '/api/Tenant/getGlobalMarketTenantHost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGetGlobalMarketTenantHost()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGetGlobalMarketTenantHost$Response(params?: TenantGetGlobalMarketTenantHost$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tenantGetGlobalMarketTenantHost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantGetGlobalMarketTenantHost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGetGlobalMarketTenantHost(params?: TenantGetGlobalMarketTenantHost$Params, context?: HttpContext): Observable<Blob> {
    return this.tenantGetGlobalMarketTenantHost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tenantGetParticipantLoginRedirectTenantHost()` */
  static readonly TenantGetParticipantLoginRedirectTenantHostPath = '/api/Tenant/participantLoginRedirectHost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGetParticipantLoginRedirectTenantHost()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGetParticipantLoginRedirectTenantHost$Response(params?: TenantGetParticipantLoginRedirectTenantHost$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tenantGetParticipantLoginRedirectTenantHost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantGetParticipantLoginRedirectTenantHost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGetParticipantLoginRedirectTenantHost(params?: TenantGetParticipantLoginRedirectTenantHost$Params, context?: HttpContext): Observable<Blob> {
    return this.tenantGetParticipantLoginRedirectTenantHost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

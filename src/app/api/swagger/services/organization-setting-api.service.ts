/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfIListOfOrgSettingDto } from '../models/api-market-json-result-of-i-list-of-org-setting-dto';
import { organizationSettingGetOrgSettings } from '../fn/organization-setting/organization-setting-get-org-settings';
import { OrganizationSettingGetOrgSettings$Params } from '../fn/organization-setting/organization-setting-get-org-settings';
import { organizationSettingGetTenantSettingsByTenantId } from '../fn/organization-setting/organization-setting-get-tenant-settings-by-tenant-id';
import { OrganizationSettingGetTenantSettingsByTenantId$Params } from '../fn/organization-setting/organization-setting-get-tenant-settings-by-tenant-id';
import { organizationSettingIsOfferModerationEnableForOrganisation } from '../fn/organization-setting/organization-setting-is-offer-moderation-enable-for-organisation';
import { OrganizationSettingIsOfferModerationEnableForOrganisation$Params } from '../fn/organization-setting/organization-setting-is-offer-moderation-enable-for-organisation';
import { organizationSettingSetOfferModerationForOrganisation } from '../fn/organization-setting/organization-setting-set-offer-moderation-for-organisation';
import { OrganizationSettingSetOfferModerationForOrganisation$Params } from '../fn/organization-setting/organization-setting-set-offer-moderation-for-organisation';

@Injectable({ providedIn: 'root' })
export class OrganizationSettingApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `organizationSettingGetOrgSettings()` */
  static readonly OrganizationSettingGetOrgSettingsPath = '/market/api/v1/tradeBusinessFlow/{tradeBusinessFlow}/org/{orgGuid}/tenant/{tenantId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationSettingGetOrgSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationSettingGetOrgSettings$Response(params: OrganizationSettingGetOrgSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIListOfOrgSettingDto>> {
    return organizationSettingGetOrgSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationSettingGetOrgSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationSettingGetOrgSettings(params: OrganizationSettingGetOrgSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIListOfOrgSettingDto> {
    return this.organizationSettingGetOrgSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIListOfOrgSettingDto>): ApiMarketJsonResultOfIListOfOrgSettingDto => r.body)
    );
  }

  /** Path part for operation `organizationSettingGetTenantSettingsByTenantId()` */
  static readonly OrganizationSettingGetTenantSettingsByTenantIdPath = '/market/api/v1/tenant-settings/{tenantId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationSettingGetTenantSettingsByTenantId()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationSettingGetTenantSettingsByTenantId$Response(params: OrganizationSettingGetTenantSettingsByTenantId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIListOfOrgSettingDto>> {
    return organizationSettingGetTenantSettingsByTenantId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationSettingGetTenantSettingsByTenantId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationSettingGetTenantSettingsByTenantId(params: OrganizationSettingGetTenantSettingsByTenantId$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIListOfOrgSettingDto> {
    return this.organizationSettingGetTenantSettingsByTenantId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIListOfOrgSettingDto>): ApiMarketJsonResultOfIListOfOrgSettingDto => r.body)
    );
  }

  /** Path part for operation `organizationSettingIsOfferModerationEnableForOrganisation()` */
  static readonly OrganizationSettingIsOfferModerationEnableForOrganisationPath = '/market/api/v1/organization-settings/is-offer-moderation-enabled';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationSettingIsOfferModerationEnableForOrganisation()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationSettingIsOfferModerationEnableForOrganisation$Response(params: OrganizationSettingIsOfferModerationEnableForOrganisation$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationSettingIsOfferModerationEnableForOrganisation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationSettingIsOfferModerationEnableForOrganisation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationSettingIsOfferModerationEnableForOrganisation(params: OrganizationSettingIsOfferModerationEnableForOrganisation$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationSettingIsOfferModerationEnableForOrganisation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationSettingSetOfferModerationForOrganisation()` */
  static readonly OrganizationSettingSetOfferModerationForOrganisationPath = '/market/api/v1/organization-settings/set-offer-moderation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationSettingSetOfferModerationForOrganisation()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationSettingSetOfferModerationForOrganisation$Response(params: OrganizationSettingSetOfferModerationForOrganisation$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationSettingSetOfferModerationForOrganisation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationSettingSetOfferModerationForOrganisation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationSettingSetOfferModerationForOrganisation(params: OrganizationSettingSetOfferModerationForOrganisation$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationSettingSetOfferModerationForOrganisation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

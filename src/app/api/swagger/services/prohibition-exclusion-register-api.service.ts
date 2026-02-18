/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto } from '../models/api-api-search-result-of-tenant-organization-settings-info';
import { ApiOrganizationNameDto } from '../models/api-organization-name-dto';
import { prohibitionExclusionRegisterCreateOrganizationSetting } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-create-organization-setting';
import { ProhibitionExclusionRegisterCreateOrganizationSetting$Params } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-create-organization-setting';
import { prohibitionExclusionRegisterDeleteOrganizationSetting } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-delete-organization-setting';
import { ProhibitionExclusionRegisterDeleteOrganizationSetting$Params } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-delete-organization-setting';
import { prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-get-organization-info-by-inn-and-kpp';
import { ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Params } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-get-organization-info-by-inn-and-kpp';
import { prohibitionExclusionRegisterGetOrganizationSettings } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-get-organization-settings';
import { ProhibitionExclusionRegisterGetOrganizationSettings$Params } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-get-organization-settings';
import { prohibitionExclusionRegisterGetTenantSettings } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-get-tenant-settings';
import { ProhibitionExclusionRegisterGetTenantSettings$Params } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-get-tenant-settings';
import { prohibitionExclusionRegisterUpdateOrganizationSetting } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-update-organization-setting';
import { ProhibitionExclusionRegisterUpdateOrganizationSetting$Params } from '../fn/prohibition-exclusion-register/prohibition-exclusion-register-update-organization-setting';

@Injectable({ providedIn: 'root' })
export class ProhibitionExclusionRegisterApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `prohibitionExclusionRegisterGetOrganizationSettings()` */
  static readonly ProhibitionExclusionRegisterGetOrganizationSettingsPath = '/api/ProhibitionExclusionRegister/GetOrgSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prohibitionExclusionRegisterGetOrganizationSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prohibitionExclusionRegisterGetOrganizationSettings$Response(params?: ProhibitionExclusionRegisterGetOrganizationSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto>> {
    return prohibitionExclusionRegisterGetOrganizationSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `prohibitionExclusionRegisterGetOrganizationSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prohibitionExclusionRegisterGetOrganizationSettings(params?: ProhibitionExclusionRegisterGetOrganizationSettings$Params, context?: HttpContext): Observable<ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto> {
    return this.prohibitionExclusionRegisterGetOrganizationSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto>): ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto => r.body)
    );
  }

  /** Path part for operation `prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp()` */
  static readonly ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKppPath = '/api/ProhibitionExclusionRegister/GetOrgInfoByInnKpp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp()` instead.
   *
   * This method doesn't expect any request body.
   */
  prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Response(params: ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiOrganizationNameDto>> {
    return prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp(params: ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Params, context?: HttpContext): Observable<ApiOrganizationNameDto> {
    return this.prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiOrganizationNameDto>): ApiOrganizationNameDto => r.body)
    );
  }

  /** Path part for operation `prohibitionExclusionRegisterCreateOrganizationSetting()` */
  static readonly ProhibitionExclusionRegisterCreateOrganizationSettingPath = '/api/ProhibitionExclusionRegister/AddNewSetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prohibitionExclusionRegisterCreateOrganizationSetting()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prohibitionExclusionRegisterCreateOrganizationSetting$Response(params?: ProhibitionExclusionRegisterCreateOrganizationSetting$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return prohibitionExclusionRegisterCreateOrganizationSetting(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `prohibitionExclusionRegisterCreateOrganizationSetting$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prohibitionExclusionRegisterCreateOrganizationSetting(params?: ProhibitionExclusionRegisterCreateOrganizationSetting$Params, context?: HttpContext): Observable<Blob> {
    return this.prohibitionExclusionRegisterCreateOrganizationSetting$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `prohibitionExclusionRegisterUpdateOrganizationSetting()` */
  static readonly ProhibitionExclusionRegisterUpdateOrganizationSettingPath = '/api/ProhibitionExclusionRegister/EditSetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prohibitionExclusionRegisterUpdateOrganizationSetting()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prohibitionExclusionRegisterUpdateOrganizationSetting$Response(params?: ProhibitionExclusionRegisterUpdateOrganizationSetting$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return prohibitionExclusionRegisterUpdateOrganizationSetting(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `prohibitionExclusionRegisterUpdateOrganizationSetting$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prohibitionExclusionRegisterUpdateOrganizationSetting(params?: ProhibitionExclusionRegisterUpdateOrganizationSetting$Params, context?: HttpContext): Observable<Blob> {
    return this.prohibitionExclusionRegisterUpdateOrganizationSetting$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `prohibitionExclusionRegisterDeleteOrganizationSetting()` */
  static readonly ProhibitionExclusionRegisterDeleteOrganizationSettingPath = '/api/ProhibitionExclusionRegister/DeleteSetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prohibitionExclusionRegisterDeleteOrganizationSetting()` instead.
   *
   * This method doesn't expect any request body.
   */
  prohibitionExclusionRegisterDeleteOrganizationSetting$Response(params: ProhibitionExclusionRegisterDeleteOrganizationSetting$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return prohibitionExclusionRegisterDeleteOrganizationSetting(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `prohibitionExclusionRegisterDeleteOrganizationSetting$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prohibitionExclusionRegisterDeleteOrganizationSetting(params: ProhibitionExclusionRegisterDeleteOrganizationSetting$Params, context?: HttpContext): Observable<Blob> {
    return this.prohibitionExclusionRegisterDeleteOrganizationSetting$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `prohibitionExclusionRegisterGetTenantSettings()` */
  static readonly ProhibitionExclusionRegisterGetTenantSettingsPath = '/api/ProhibitionExclusionRegister/GetTenantSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prohibitionExclusionRegisterGetTenantSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  prohibitionExclusionRegisterGetTenantSettings$Response(params?: ProhibitionExclusionRegisterGetTenantSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return prohibitionExclusionRegisterGetTenantSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `prohibitionExclusionRegisterGetTenantSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prohibitionExclusionRegisterGetTenantSettings(params?: ProhibitionExclusionRegisterGetTenantSettings$Params, context?: HttpContext): Observable<Blob> {
    return this.prohibitionExclusionRegisterGetTenantSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

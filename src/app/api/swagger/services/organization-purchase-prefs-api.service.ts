/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfBoolean } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfMarketOrganizationSettings } from '../models/api-market-json-result-of-market-organization-settings';
import { organizationPurchasePrefsGetPurchaseSettings } from '../fn/organization-purchase-prefs/organization-purchase-prefs-get-purchase-settings';
import { OrganizationPurchasePrefsGetPurchaseSettings$Params } from '../fn/organization-purchase-prefs/organization-purchase-prefs-get-purchase-settings';
import { organizationPurchasePrefsSetEisPrefs } from '../fn/organization-purchase-prefs/organization-purchase-prefs-set-eis-prefs';
import { OrganizationPurchasePrefsSetEisPrefs$Params } from '../fn/organization-purchase-prefs/organization-purchase-prefs-set-eis-prefs';
import { organizationPurchasePrefsSetHideApplicationData } from '../fn/organization-purchase-prefs/organization-purchase-prefs-set-hide-application-data';
import { OrganizationPurchasePrefsSetHideApplicationData$Params } from '../fn/organization-purchase-prefs/organization-purchase-prefs-set-hide-application-data';
import { organizationPurchasePrefsSetM4DPrefs } from '../fn/organization-purchase-prefs/organization-purchase-prefs-set-m-4-d-prefs';
import { OrganizationPurchasePrefsSetM4DPrefs$Params } from '../fn/organization-purchase-prefs/organization-purchase-prefs-set-m-4-d-prefs';
import { organizationPurchasePrefsSetOtherPrefs } from '../fn/organization-purchase-prefs/organization-purchase-prefs-set-other-prefs';
import { OrganizationPurchasePrefsSetOtherPrefs$Params } from '../fn/organization-purchase-prefs/organization-purchase-prefs-set-other-prefs';
import { organizationPurchasePrefsSetSignatureStampFormat } from '../fn/organization-purchase-prefs/organization-purchase-prefs-set-signature-stamp-format';
import { OrganizationPurchasePrefsSetSignatureStampFormat$Params } from '../fn/organization-purchase-prefs/organization-purchase-prefs-set-signature-stamp-format';

@Injectable({ providedIn: 'root' })
export class OrganizationPurchasePrefsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `organizationPurchasePrefsGetPurchaseSettings()` */
  static readonly OrganizationPurchasePrefsGetPurchaseSettingsPath = '/bla-bla-vla/organization/purchase-settings/my';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationPurchasePrefsGetPurchaseSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationPurchasePrefsGetPurchaseSettings$Response(params?: OrganizationPurchasePrefsGetPurchaseSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationSettings>> {
    return organizationPurchasePrefsGetPurchaseSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationPurchasePrefsGetPurchaseSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationPurchasePrefsGetPurchaseSettings(params?: OrganizationPurchasePrefsGetPurchaseSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketOrganizationSettings> {
    return this.organizationPurchasePrefsGetPurchaseSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationSettings>): ApiMarketJsonResultOfMarketOrganizationSettings => r.body)
    );
  }

  /** Path part for operation `organizationPurchasePrefsSetEisPrefs()` */
  static readonly OrganizationPurchasePrefsSetEisPrefsPath = '/bla-bla-vla/organization/purchase-settings/my/eis';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationPurchasePrefsSetEisPrefs()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationPurchasePrefsSetEisPrefs$Response(params?: OrganizationPurchasePrefsSetEisPrefs$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return organizationPurchasePrefsSetEisPrefs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationPurchasePrefsSetEisPrefs$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationPurchasePrefsSetEisPrefs(params?: OrganizationPurchasePrefsSetEisPrefs$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.organizationPurchasePrefsSetEisPrefs$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `organizationPurchasePrefsSetM4DPrefs()` */
  static readonly OrganizationPurchasePrefsSetM4DPrefsPath = '/bla-bla-vla/organization/purchase-settings/my/power-of-attorney';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationPurchasePrefsSetM4DPrefs()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationPurchasePrefsSetM4DPrefs$Response(params?: OrganizationPurchasePrefsSetM4DPrefs$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return organizationPurchasePrefsSetM4DPrefs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationPurchasePrefsSetM4DPrefs$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationPurchasePrefsSetM4DPrefs(params?: OrganizationPurchasePrefsSetM4DPrefs$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.organizationPurchasePrefsSetM4DPrefs$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `organizationPurchasePrefsSetOtherPrefs()` */
  static readonly OrganizationPurchasePrefsSetOtherPrefsPath = '/bla-bla-vla/organization/purchase-settings/my/other';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationPurchasePrefsSetOtherPrefs()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationPurchasePrefsSetOtherPrefs$Response(params?: OrganizationPurchasePrefsSetOtherPrefs$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return organizationPurchasePrefsSetOtherPrefs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationPurchasePrefsSetOtherPrefs$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationPurchasePrefsSetOtherPrefs(params?: OrganizationPurchasePrefsSetOtherPrefs$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.organizationPurchasePrefsSetOtherPrefs$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `organizationPurchasePrefsSetHideApplicationData()` */
  static readonly OrganizationPurchasePrefsSetHideApplicationDataPath = '/bla-bla-vla/organization/purchase-settings/my/hide-application';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationPurchasePrefsSetHideApplicationData()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationPurchasePrefsSetHideApplicationData$Response(params?: OrganizationPurchasePrefsSetHideApplicationData$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return organizationPurchasePrefsSetHideApplicationData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationPurchasePrefsSetHideApplicationData$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationPurchasePrefsSetHideApplicationData(params?: OrganizationPurchasePrefsSetHideApplicationData$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.organizationPurchasePrefsSetHideApplicationData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `organizationPurchasePrefsSetSignatureStampFormat()` */
  static readonly OrganizationPurchasePrefsSetSignatureStampFormatPath = '/bla-bla-vla/organization/purchase-settings/my/signature-stamp-format';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationPurchasePrefsSetSignatureStampFormat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationPurchasePrefsSetSignatureStampFormat$Response(params?: OrganizationPurchasePrefsSetSignatureStampFormat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return organizationPurchasePrefsSetSignatureStampFormat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationPurchasePrefsSetSignatureStampFormat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationPurchasePrefsSetSignatureStampFormat(params?: OrganizationPurchasePrefsSetSignatureStampFormat$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.organizationPurchasePrefsSetSignatureStampFormat$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

}

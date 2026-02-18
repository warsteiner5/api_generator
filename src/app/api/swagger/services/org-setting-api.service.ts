/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { orgSettingGetBoolCurrentOrgSetting } from '../fn/org-setting/org-setting-get-bool-current-org-setting';
import { OrgSettingGetBoolCurrentOrgSetting$Params } from '../fn/org-setting/org-setting-get-bool-current-org-setting';
import { orgSettingGetBoolOrgSetting } from '../fn/org-setting/org-setting-get-bool-org-setting';
import { OrgSettingGetBoolOrgSetting$Params } from '../fn/org-setting/org-setting-get-bool-org-setting';

@Injectable({ providedIn: 'root' })
export class OrgSettingApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `orgSettingGetBoolCurrentOrgSetting()` */
  static readonly OrgSettingGetBoolCurrentOrgSettingPath = '/api/OrgSetting/bool/{settingName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgSettingGetBoolCurrentOrgSetting()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgSettingGetBoolCurrentOrgSetting$Response(params: OrgSettingGetBoolCurrentOrgSetting$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return orgSettingGetBoolCurrentOrgSetting(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgSettingGetBoolCurrentOrgSetting$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgSettingGetBoolCurrentOrgSetting(params: OrgSettingGetBoolCurrentOrgSetting$Params, context?: HttpContext): Observable<Blob> {
    return this.orgSettingGetBoolCurrentOrgSetting$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `orgSettingGetBoolOrgSetting()` */
  static readonly OrgSettingGetBoolOrgSettingPath = '/api/OrgSetting/bool/{organizationId}/{settingName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgSettingGetBoolOrgSetting()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgSettingGetBoolOrgSetting$Response(params: OrgSettingGetBoolOrgSetting$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return orgSettingGetBoolOrgSetting(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgSettingGetBoolOrgSetting$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgSettingGetBoolOrgSetting(params: OrgSettingGetBoolOrgSetting$Params, context?: HttpContext): Observable<Blob> {
    return this.orgSettingGetBoolOrgSetting$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}

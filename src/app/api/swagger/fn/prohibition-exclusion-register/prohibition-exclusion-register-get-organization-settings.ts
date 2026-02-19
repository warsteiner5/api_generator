/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto } from '../../models/api-api-search-result-of-tenant-organization-settings-info';
import { ApiTenantOrganizationSettingsFilterAltDto } from '../../models/api-tenant-organization-settings-filter';

export interface ProhibitionExclusionRegisterGetOrganizationSettings$Params {
      body?: ApiTenantOrganizationSettingsFilterAltDto | null
}

export function prohibitionExclusionRegisterGetOrganizationSettings(http: HttpClient, rootUrl: string, params?: ProhibitionExclusionRegisterGetOrganizationSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, prohibitionExclusionRegisterGetOrganizationSettings.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto>;
    })
  );
}

prohibitionExclusionRegisterGetOrganizationSettings.PATH = '/api/ProhibitionExclusionRegister/GetOrgSettings';

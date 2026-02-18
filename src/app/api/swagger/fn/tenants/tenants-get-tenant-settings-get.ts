/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTenantSettingDto } from '../../models/api-market-json-result-of-tenant-setting-dto';

export interface TenantsGetTenantSettingsGet$Params {
  id: number;
}

export function tenantsGetTenantSettingsGet(http: HttpClient, rootUrl: string, params: TenantsGetTenantSettingsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTenantSettingDto>> {
  const rb = new RequestBuilder(rootUrl, tenantsGetTenantSettingsGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTenantSettingDto>;
    })
  );
}

tenantsGetTenantSettingsGet.PATH = '/bla-bla-vla/tenants/{id}';

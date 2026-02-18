/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTenantSettingDto } from '../../models/api-market-json-result-of-tenant-setting-dto';
import { ApiSearchTenantBindingModelAltDto } from '../../models/api-search-tenant-binding-model';

export interface TenantsGetTenantSettingsPost$Params {
      body?: ApiSearchTenantBindingModelAltDto | null
}

export function tenantsGetTenantSettingsPost(http: HttpClient, rootUrl: string, params?: TenantsGetTenantSettingsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTenantSettingDto>> {
  const rb = new RequestBuilder(rootUrl, tenantsGetTenantSettingsPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

tenantsGetTenantSettingsPost.PATH = '/bla-bla-vla/tenants';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIListOfOrgSettingDto } from '../../models/api-market-json-result-of-i-list-of-org-setting-dto';

export interface OrganizationSettingGetTenantSettingsByTenantId$Params {
  tenantId: number;
}

export function organizationSettingGetTenantSettingsByTenantId(http: HttpClient, rootUrl: string, params: OrganizationSettingGetTenantSettingsByTenantId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIListOfOrgSettingDto>> {
  const rb = new RequestBuilder(rootUrl, organizationSettingGetTenantSettingsByTenantId.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIListOfOrgSettingDto>;
    })
  );
}

organizationSettingGetTenantSettingsByTenantId.PATH = '/market/api/v1/tenant-settings/{tenantId}';

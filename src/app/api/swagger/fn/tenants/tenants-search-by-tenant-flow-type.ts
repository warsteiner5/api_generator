/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfString } from '../../models/api-market-json-result-of-string';
import { ApiTenantFlowTypeAltEnum } from '../../models/api-tenant-flow-type';

export interface TenantsSearchByTenantFlowType$Params {
  flowType: ApiTenantFlowTypeAltEnum;
}

export function tenantsSearchByTenantFlowType(http: HttpClient, rootUrl: string, params: TenantsSearchByTenantFlowType$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfString>> {
  const rb = new RequestBuilder(rootUrl, tenantsSearchByTenantFlowType.PATH, 'get');
  if (params) {
    rb.path('flowType', params.flowType, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfString>;
    })
  );
}

tenantsSearchByTenantFlowType.PATH = '/bla-bla-vla/tenants/search/{flowType}';

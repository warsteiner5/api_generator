/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfRoleDetailResponseAltDto } from '../../models/api-market-json-result-of-role-detail-response';

export interface RolesGetRole$Params {
  id: number;
  withPermissions?: boolean | null;
}

export function rolesGetRole(http: HttpClient, rootUrl: string, params: RolesGetRole$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRoleDetailResponseAltDto>> {
  const rb = new RequestBuilder(rootUrl, rolesGetRole.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.query('withPermissions', params.withPermissions, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfRoleDetailResponseAltDto>;
    })
  );
}

rolesGetRole.PATH = '/market/api/v1/security/roles/{id}';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateRoleRequestAltDto } from '../../models/api-create-role-request';
import { ApiMarketJsonResultOfInteger } from '../../models/api-market-json-result-of-integer';

export interface RolesCreateRole$Params {
      body?: ApiCreateRoleRequestAltDto | null
}

export function rolesCreateRole(http: HttpClient, rootUrl: string, params?: RolesCreateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
  const rb = new RequestBuilder(rootUrl, rolesCreateRole.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfInteger>;
    })
  );
}

rolesCreateRole.PATH = '/bla-bla-vla/security/roles';

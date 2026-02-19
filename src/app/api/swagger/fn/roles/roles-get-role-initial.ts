/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfRoleDetailResponseAltDto } from '../../models/api-market-json-result-of-role-detail-response';

export interface RolesGetRoleInitial$Params {
}

export function rolesGetRoleInitial(http: HttpClient, rootUrl: string, params?: RolesGetRoleInitial$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRoleDetailResponseAltDto>> {
  const rb = new RequestBuilder(rootUrl, rolesGetRoleInitial.PATH, 'get');
  if (params) {
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

rolesGetRoleInitial.PATH = '/market/api/v1/security/roles/create';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-role-item-response-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface RolesSearchRoles$Params {
      body?: ApiSearchObjectAltDto | null
}

export function rolesSearchRoles(http: HttpClient, rootUrl: string, params?: RolesSearchRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto>> {
  const rb = new RequestBuilder(rootUrl, rolesSearchRoles.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto>;
    })
  );
}

rolesSearchRoles.PATH = '/bla-bla-vla/security/roles/search';

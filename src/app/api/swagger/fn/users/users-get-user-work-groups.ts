/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfWorkGroupDtoOf } from '../../models/api-market-json-result-of-work-group-dto-of';

export interface UsersGetUserWorkGroups$Params {
}

export function usersGetUserWorkGroups(http: HttpClient, rootUrl: string, params?: UsersGetUserWorkGroups$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfWorkGroupDtoOf>> {
  const rb = new RequestBuilder(rootUrl, usersGetUserWorkGroups.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfWorkGroupDtoOf>;
    })
  );
}

usersGetUserWorkGroups.PATH = '/market/api/v1/users/work-groups';

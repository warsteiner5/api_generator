/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketUserProfileDto } from '../../models/api-market-json-result-of-market-user-profile-dto';

export interface UsersGetExternalUserInfo$Params {
}

export function usersGetExternalUserInfo(http: HttpClient, rootUrl: string, params?: UsersGetExternalUserInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketUserProfileDto>> {
  const rb = new RequestBuilder(rootUrl, usersGetExternalUserInfo.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketUserProfileDto>;
    })
  );
}

usersGetExternalUserInfo.PATH = '/bla-bla-vla/users/profile';

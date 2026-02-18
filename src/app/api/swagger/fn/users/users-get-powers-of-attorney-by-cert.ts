/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiGetPowerOfAttorneyDto } from '../../models/api-get-power-of-attorney-dto';
import { ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto } from '../../models/api-market-json-result-of-list-of-power-of-attorney-info-dto';

export interface UsersGetPowersOfAttorneyByCert$Params {
      body?: ApiGetPowerOfAttorneyDto | null
}

export function usersGetPowersOfAttorneyByCert(http: HttpClient, rootUrl: string, params?: UsersGetPowersOfAttorneyByCert$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto>> {
  const rb = new RequestBuilder(rootUrl, usersGetPowersOfAttorneyByCert.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto>;
    })
  );
}

usersGetPowersOfAttorneyByCert.PATH = '/bla-bla-vla/users/powers-of-attorney';

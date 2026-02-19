/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOpenPartUserShopDtoOf } from '../../models/api-market-json-result-of-open-part-user-shop-dto-of';

export interface UsersGetOpenPartUserShops$Params {
}

export function usersGetOpenPartUserShops(http: HttpClient, rootUrl: string, params?: UsersGetOpenPartUserShops$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOpenPartUserShopDtoOf>> {
  const rb = new RequestBuilder(rootUrl, usersGetOpenPartUserShops.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOpenPartUserShopDtoOf>;
    })
  );
}

usersGetOpenPartUserShops.PATH = '/market/api/v1/users/tenants';

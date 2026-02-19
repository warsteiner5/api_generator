/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfFavoriteCountInfoDto } from '../../models/api-market-json-result-of-favorite-count-info-dto';

export interface FavoritesGetFavoriteCount$Params {
}

export function favoritesGetFavoriteCount(http: HttpClient, rootUrl: string, params?: FavoritesGetFavoriteCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFavoriteCountInfoDto>> {
  const rb = new RequestBuilder(rootUrl, favoritesGetFavoriteCount.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfFavoriteCountInfoDto>;
    })
  );
}

favoritesGetFavoriteCount.PATH = '/market/api/v1/favorite/count';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFavoriteEntityTypeEnum } from '../../models/api-favorite-entity-type-enum';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface FavoritesClearFavorite$Params {
  entityType: ApiFavoriteEntityTypeEnum;
}

export function favoritesClearFavorite(http: HttpClient, rootUrl: string, params: FavoritesClearFavorite$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, favoritesClearFavorite.PATH, 'delete');
  if (params) {
    rb.query('entityType', params.entityType, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

favoritesClearFavorite.PATH = '/market/api/v1/favorite/clear';

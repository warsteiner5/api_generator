/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFavoriteEntityTypeEnum } from '../../models/api-favorite-entity-type-enum';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface FavoritesDeleteFavorite$Params {
  EntityId?: number | null;
  EntityGuid?: string | null;
  EntityType?: ApiFavoriteEntityTypeEnum;
}

export function favoritesDeleteFavorite(http: HttpClient, rootUrl: string, params?: FavoritesDeleteFavorite$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, favoritesDeleteFavorite.PATH, 'delete');
  if (params) {
    rb.query('EntityId', params.EntityId, {});
    rb.query('EntityGuid', params.EntityGuid, {});
    rb.query('EntityType', params.EntityType, {});
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

favoritesDeleteFavorite.PATH = '/market/api/v1/favorite/delete';

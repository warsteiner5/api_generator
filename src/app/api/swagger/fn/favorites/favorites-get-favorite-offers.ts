/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-market-search-result-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface FavoritesGetFavoriteOffers$Params {
      body?: ApiSearchObjectAltDto | null
}

export function favoritesGetFavoriteOffers(http: HttpClient, rootUrl: string, params?: FavoritesGetFavoriteOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>> {
  const rb = new RequestBuilder(rootUrl, favoritesGetFavoriteOffers.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>;
    })
  );
}

favoritesGetFavoriteOffers.PATH = '/bla-bla-vla/favorite/offers';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-market-organization-short-info-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface FavoritesGetFavoriteOrganizations$Params {
      body?: ApiSearchObjectAltDto | null
}

export function favoritesGetFavoriteOrganizations(http: HttpClient, rootUrl: string, params?: FavoritesGetFavoriteOrganizations$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto>> {
  const rb = new RequestBuilder(rootUrl, favoritesGetFavoriteOrganizations.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto>;
    })
  );
}

favoritesGetFavoriteOrganizations.PATH = '/market/api/v1/favorite/organizations';

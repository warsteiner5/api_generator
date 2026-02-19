/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-moderation-price-list-search-item-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface ModeratorGetPriceListsByFilter$Params {
      body?: ApiSearchObjectAltDto | null
}

export function moderatorGetPriceListsByFilter(http: HttpClient, rootUrl: string, params?: ModeratorGetPriceListsByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto>> {
  const rb = new RequestBuilder(rootUrl, moderatorGetPriceListsByFilter.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto>;
    })
  );
}

moderatorGetPriceListsByFilter.PATH = '/market/api/v1/moderator/pricelists';

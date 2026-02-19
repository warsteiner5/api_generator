/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-stop-list-item-dto';
import { ApiStopListItemFilterAltDto } from '../../models/api-stop-list-item-filter';

export interface StopListItemGetPaginateStopListItems$Params {
      body?: ApiStopListItemFilterAltDto | null
}

export function stopListItemGetPaginateStopListItems(http: HttpClient, rootUrl: string, params?: StopListItemGetPaginateStopListItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto>> {
  const rb = new RequestBuilder(rootUrl, stopListItemGetPaginateStopListItems.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto>;
    })
  );
}

stopListItemGetPaginateStopListItems.PATH = '/market/api/v1/stoplistitem';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-stop-list-item-extended-dto';
import { ApiStopListItemFilterAltDto } from '../../models/api-stop-list-item-filter';

export interface StopListItemGetPaginateStopListItemExtetndeds$Params {
      body?: ApiStopListItemFilterAltDto | null
}

export function stopListItemGetPaginateStopListItemExtetndeds(http: HttpClient, rootUrl: string, params?: StopListItemGetPaginateStopListItemExtetndeds$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto>> {
  const rb = new RequestBuilder(rootUrl, stopListItemGetPaginateStopListItemExtetndeds.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto>;
    })
  );
}

stopListItemGetPaginateStopListItemExtetndeds.PATH = '/bla-bla-vla/stoplistitem/getFullInfo';

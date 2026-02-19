/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItemAltDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-price-list-item';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface PomogatorGetSettingsPriceLists$Params {
      body?: ApiSearchObjectAltDto | null
}

export function pomogatorGetSettingsPriceLists(http: HttpClient, rootUrl: string, params?: PomogatorGetSettingsPriceLists$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItemAltDto>> {
  const rb = new RequestBuilder(rootUrl, pomogatorGetSettingsPriceLists.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItemAltDto>;
    })
  );
}

pomogatorGetSettingsPriceLists.PATH = '/market/api/v1/pomogator/settings/price-lists';

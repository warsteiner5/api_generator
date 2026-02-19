/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAcceptedPriceListFilterDto } from '../../models/api-accepted-price-list-filter-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-accepted-price-list-info-dto';

export interface CompetetiveListGetAcceptedPriceLists$Params {
      body?: ApiAcceptedPriceListFilterDto | null
}

export function competetiveListGetAcceptedPriceLists(http: HttpClient, rootUrl: string, params?: CompetetiveListGetAcceptedPriceLists$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto>> {
  const rb = new RequestBuilder(rootUrl, competetiveListGetAcceptedPriceLists.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto>;
    })
  );
}

competetiveListGetAcceptedPriceLists.PATH = '/market/api/v1/competetivelist/acceptedPriceLists';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-market-offer-short-model-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface OffersSearch$Params {
      body?: ApiSearchObjectAltDto | null
}

export function offersSearch(http: HttpClient, rootUrl: string, params?: OffersSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto>> {
  const rb = new RequestBuilder(rootUrl, offersSearch.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto>;
    })
  );
}

offersSearch.PATH = '/bla-bla-vla/offers/search';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfOfferStatesDto } from '../../models/api-market-json-result-of-list-of-offer-states-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface OffersCount$Params {
      body?: ApiSearchObjectAltDto | null
}

export function offersCount(http: HttpClient, rootUrl: string, params?: OffersCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOfferStatesDto>> {
  const rb = new RequestBuilder(rootUrl, offersCount.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfOfferStatesDto>;
    })
  );
}

offersCount.PATH = '/market/api/v1/offers/count';

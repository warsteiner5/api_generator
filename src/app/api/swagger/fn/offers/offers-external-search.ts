/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto } from '../../models/api-market-json-result-of-i-read-only-collection-of-participant-offer-dto';
import { ApiParticipantOffersSearchFilterAltDto } from '../../models/api-participant-offers-search-filter';

export interface OffersExternalSearch$Params {
      body?: ApiParticipantOffersSearchFilterAltDto | null
}

export function offersExternalSearch(http: HttpClient, rootUrl: string, params?: OffersExternalSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto>> {
  const rb = new RequestBuilder(rootUrl, offersExternalSearch.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto>;
    })
  );
}

offersExternalSearch.PATH = '/bla-bla-vla/offers/external-info/search';

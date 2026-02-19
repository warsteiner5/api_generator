/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-market-participant-offer-info-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface OffersGetOffers$Params {
      body?: ApiSearchObjectAltDto | null
}

export function offersGetOffers(http: HttpClient, rootUrl: string, params?: OffersGetOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto>> {
  const rb = new RequestBuilder(rootUrl, offersGetOffers.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto>;
    })
  );
}

offersGetOffers.PATH = '/market/api/v1/offers/my';

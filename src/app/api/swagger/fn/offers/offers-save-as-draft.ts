/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfLongAltDto } from '../../models/api-market-json-result-of-long';
import { ApiMarketParticipantOfferDto } from '../../models/api-market-participant-offer-dto';

export interface OffersSaveAsDraft$Params {
      body?: ApiMarketParticipantOfferDto | null
}

export function offersSaveAsDraft(http: HttpClient, rootUrl: string, params?: OffersSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>> {
  const rb = new RequestBuilder(rootUrl, offersSaveAsDraft.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>;
    })
  );
}

offersSaveAsDraft.PATH = '/market/api/v1/offers/draft';

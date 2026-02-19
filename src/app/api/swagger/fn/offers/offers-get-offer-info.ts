/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketParticipantOfferInfoDto } from '../../models/api-market-json-result-of-market-participant-offer-info-dto';

export interface OffersGetOfferInfo$Params {
  id: number;
}

export function offersGetOfferInfo(http: HttpClient, rootUrl: string, params: OffersGetOfferInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketParticipantOfferInfoDto>> {
  const rb = new RequestBuilder(rootUrl, offersGetOfferInfo.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketParticipantOfferInfoDto>;
    })
  );
}

offersGetOfferInfo.PATH = '/market/api/v1/offers/{id}';

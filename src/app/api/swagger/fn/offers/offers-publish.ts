/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfParticipantOfferPublishResultDto } from '../../models/api-market-json-result-of-participant-offer-publish-result-dto';
import { ApiMarketParticipantOfferDto } from '../../models/api-market-participant-offer-dto';

export interface OffersPublish$Params {
      body?: ApiMarketParticipantOfferDto | null
}

export function offersPublish(http: HttpClient, rootUrl: string, params?: OffersPublish$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfParticipantOfferPublishResultDto>> {
  const rb = new RequestBuilder(rootUrl, offersPublish.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfParticipantOfferPublishResultDto>;
    })
  );
}

offersPublish.PATH = '/market/api/v1/offers';

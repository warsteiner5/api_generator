/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfParticipantOfferItemDto } from '../../models/api-market-json-result-of-list-of-participant-offer-item-dto';

export interface RequirementRequestsGetPriceLists$Params {
  requirementRequestId: number;
}

export function requirementRequestsGetPriceLists(http: HttpClient, rootUrl: string, params: RequirementRequestsGetPriceLists$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfParticipantOfferItemDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetPriceLists.PATH, 'get');
  if (params) {
    rb.path('requirementRequestId', params.requirementRequestId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfParticipantOfferItemDto>;
    })
  );
}

requirementRequestsGetPriceLists.PATH = '/bla-bla-vla/RequirementRequests/getpriceLists/{requirementRequestId}';

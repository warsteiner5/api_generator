/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiRequirementRequestShortInfoDto } from '../../models/api-requirement-request-short-info-dto';

export interface RequirementRequestsGetRequirementRequestsByOffer$Params {
  participantOfferId: number;
}

export function requirementRequestsGetRequirementRequestsByOffer(http: HttpClient, rootUrl: string, params: RequirementRequestsGetRequirementRequestsByOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiRequirementRequestShortInfoDto>>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetRequirementRequestsByOffer.PATH, 'get');
  if (params) {
    rb.path('participantOfferId', params.participantOfferId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApiRequirementRequestShortInfoDto>>;
    })
  );
}

requirementRequestsGetRequirementRequestsByOffer.PATH = '/market/api/v1/RequirementRequests/byOffer/{participantOfferId}';

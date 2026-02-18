/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiOrganizationRatingDto } from '../../models/api-organization-rating-dto';

export interface ParticipantRatingDeleteCustomerFeedbackForParticipant$Params {
      body?: ApiOrganizationRatingDto | null
}

export function participantRatingDeleteCustomerFeedbackForParticipant(http: HttpClient, rootUrl: string, params?: ParticipantRatingDeleteCustomerFeedbackForParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, participantRatingDeleteCustomerFeedbackForParticipant.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

participantRatingDeleteCustomerFeedbackForParticipant.PATH = '/bla-bla-vla/ParticipantRating/DeleteCustomerFeedbackForParticipant';

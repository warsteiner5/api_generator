/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiParticipantRatingDetailsToLeaveFeedbackDto } from '../../models/api-participant-rating-details-to-leave-feedback-dto';

export interface ParticipantRatingGetParticipantRatingDetailsToLeaveFeedback$Params {
  id: number;
}

export function participantRatingGetParticipantRatingDetailsToLeaveFeedback(http: HttpClient, rootUrl: string, params: ParticipantRatingGetParticipantRatingDetailsToLeaveFeedback$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiParticipantRatingDetailsToLeaveFeedbackDto>> {
  const rb = new RequestBuilder(rootUrl, participantRatingGetParticipantRatingDetailsToLeaveFeedback.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiParticipantRatingDetailsToLeaveFeedbackDto>;
    })
  );
}

participantRatingGetParticipantRatingDetailsToLeaveFeedback.PATH = '/bla-bla-vla/ParticipantRating/GetParticipantRatingDetailsToLeaveFeedback/{id}';

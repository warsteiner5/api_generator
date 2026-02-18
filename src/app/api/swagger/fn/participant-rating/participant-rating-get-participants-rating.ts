/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiParticipantFeedbackRatingFilterDto } from '../../models/api-participant-feedback-rating-filter-dto';
import { ApiSearchResultOfParticipantFeedbackRatingInfoDto } from '../../models/api-search-result-of-participant-feedback-rating-info-dto';

export interface ParticipantRatingGetParticipantsRating$Params {
      body?: ApiParticipantFeedbackRatingFilterDto | null
}

export function participantRatingGetParticipantsRating(http: HttpClient, rootUrl: string, params?: ParticipantRatingGetParticipantsRating$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiSearchResultOfParticipantFeedbackRatingInfoDto>> {
  const rb = new RequestBuilder(rootUrl, participantRatingGetParticipantsRating.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiSearchResultOfParticipantFeedbackRatingInfoDto>;
    })
  );
}

participantRatingGetParticipantsRating.PATH = '/bla-bla-vla/ParticipantRating/GetParticipantsRating';

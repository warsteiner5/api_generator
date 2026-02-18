/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCanLeaveFeebackRequestDto } from '../../models/api-can-leave-feeback-request-dto';

export interface ParticipantRatingCanLeaveRatingFeedback$Params {
      body?: ApiCanLeaveFeebackRequestDto | null
}

export function participantRatingCanLeaveRatingFeedback(http: HttpClient, rootUrl: string, params?: ParticipantRatingCanLeaveRatingFeedback$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
  const rb = new RequestBuilder(rootUrl, participantRatingCanLeaveRatingFeedback.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
    })
  );
}

participantRatingCanLeaveRatingFeedback.PATH = '/bla-bla-vla/ParticipantRating/CanLeaveRatingFeedback';

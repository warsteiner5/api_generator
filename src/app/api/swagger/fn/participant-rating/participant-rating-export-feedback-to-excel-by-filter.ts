/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiParticipantFeedbackRatingFilterDto } from '../../models/api-participant-feedback-rating-filter-dto';

export interface ParticipantRatingExportFeedbackToExcelByFilter$Params {
      body?: ApiParticipantFeedbackRatingFilterDto | null
}

export function participantRatingExportFeedbackToExcelByFilter(http: HttpClient, rootUrl: string, params?: ParticipantRatingExportFeedbackToExcelByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, participantRatingExportFeedbackToExcelByFilter.PATH, 'post');
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

participantRatingExportFeedbackToExcelByFilter.PATH = '/bla-bla-vla/ParticipantRating/ExportFeedbackToExcelByFilter';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFeedbackDto } from '../../models/api-feedback-dto';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface FeedbackAddFeedback$Params {
      body?: ApiFeedbackDto | null
}

export function feedbackAddFeedback(http: HttpClient, rootUrl: string, params?: FeedbackAddFeedback$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, feedbackAddFeedback.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

feedbackAddFeedback.PATH = '/bla-bla-vla/feedback/submit';

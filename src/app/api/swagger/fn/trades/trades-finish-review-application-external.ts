/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFinishReviewApplicationDto } from '../../models/api-finish-review-application-dto';
import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';

export interface TradesFinishReviewApplicationExternal$Params {
  id: number;
      body?: ApiFinishReviewApplicationDto | null
}

export function tradesFinishReviewApplicationExternal(http: HttpClient, rootUrl: string, params: TradesFinishReviewApplicationExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, tradesFinishReviewApplicationExternal.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBoolean>;
    })
  );
}

tradesFinishReviewApplicationExternal.PATH = '/bla-bla-vla/trades/{id}/applications/review/finish-external';

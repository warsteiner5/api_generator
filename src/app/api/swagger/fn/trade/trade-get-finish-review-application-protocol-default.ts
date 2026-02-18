/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFinishReviewApplicationDto } from '../../models/api-finish-review-application-dto';

export interface TradeGetFinishReviewApplicationProtocolDefault$Params {
      body?: ApiFinishReviewApplicationDto | null
}

export function tradeGetFinishReviewApplicationProtocolDefault(http: HttpClient, rootUrl: string, params?: TradeGetFinishReviewApplicationProtocolDefault$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradeGetFinishReviewApplicationProtocolDefault.PATH, 'post');
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

tradeGetFinishReviewApplicationProtocolDefault.PATH = '/bla-bla-vla/Trade/FinishReviewApplicationProtocolDefault';

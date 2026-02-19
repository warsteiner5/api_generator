/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TradesReturnTradeToReviewApplicaitons$Params {
  tradeId: number;
}

export function tradesReturnTradeToReviewApplicaitons(http: HttpClient, rootUrl: string, params: TradesReturnTradeToReviewApplicaitons$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradesReturnTradeToReviewApplicaitons.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
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

tradesReturnTradeToReviewApplicaitons.PATH = '/market/api/v1/trades/{tradeId}/review-applications/return';

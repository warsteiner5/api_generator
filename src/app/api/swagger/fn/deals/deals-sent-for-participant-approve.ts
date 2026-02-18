/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFullDealDto } from '../../models/api-full-deal-dto';
import { ApiMarketJsonResultOfLong } from '../../models/api-market-json-result-of-long';

export interface DealsSentForParticipantApprove$Params {
      body?: ApiFullDealDto | null
}

export function dealsSentForParticipantApprove(http: HttpClient, rootUrl: string, params?: DealsSentForParticipantApprove$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLong>> {
  const rb = new RequestBuilder(rootUrl, dealsSentForParticipantApprove.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfLong>;
    })
  );
}

dealsSentForParticipantApprove.PATH = '/bla-bla-vla/deals/customers/sent_for_approve';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto } from '../../models/api-market-json-result-of-i-enumerable-of-clarification-participant-dto';

export interface ClarificationRequestsGetTradeParticipantList$Params {
  tradeId: number;
}

export function clarificationRequestsGetTradeParticipantList(http: HttpClient, rootUrl: string, params: ClarificationRequestsGetTradeParticipantList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto>> {
  const rb = new RequestBuilder(rootUrl, clarificationRequestsGetTradeParticipantList.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto>;
    })
  );
}

clarificationRequestsGetTradeParticipantList.PATH = '/bla-bla-vla/trades/{tradeId}/clarification-requests/participants';

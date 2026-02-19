/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TradesAddMmoParticipantMissedSigningTimeSystemMessage$Params {
  tradeId: number;
  discussionOwnerId: number;
}

export function tradesAddMmoParticipantMissedSigningTimeSystemMessage(http: HttpClient, rootUrl: string, params: TradesAddMmoParticipantMissedSigningTimeSystemMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradesAddMmoParticipantMissedSigningTimeSystemMessage.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.path('discussionOwnerId', params.discussionOwnerId, {});
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

tradesAddMmoParticipantMissedSigningTimeSystemMessage.PATH = '/market/api/v1/trades/{tradeId}/chat/MmoParticipantMissedSigningTimeSystemMessage/{discussionOwnerId}';

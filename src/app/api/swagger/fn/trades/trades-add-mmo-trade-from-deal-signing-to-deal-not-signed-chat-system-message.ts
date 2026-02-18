/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Params {
  tradeId: number;
  dealId: number;
}

export function tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage(http: HttpClient, rootUrl: string, params: TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.path('dealId', params.dealId, {});
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

tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage.PATH = '/bla-bla-vla/trades/{tradeId}/chat/MmoTradeFromDealSigningToDealNotSignedChatSystemMessage/{dealId}';

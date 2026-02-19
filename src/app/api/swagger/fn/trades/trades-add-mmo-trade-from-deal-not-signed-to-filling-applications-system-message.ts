/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Params {
  tradeId: number;
}

export function tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage(http: HttpClient, rootUrl: string, params: TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage.PATH, 'post');
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

tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage.PATH = '/market/api/v1/trades/{tradeId}/chat/add/MmoTradeFromDealNotSignedToFillingApplicationsSystemMessage';

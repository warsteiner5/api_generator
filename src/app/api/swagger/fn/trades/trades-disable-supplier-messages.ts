/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TradesDisableSupplierMessages$Params {
  chatId: number;
}

export function tradesDisableSupplierMessages(http: HttpClient, rootUrl: string, params: TradesDisableSupplierMessages$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradesDisableSupplierMessages.PATH, 'post');
  if (params) {
    rb.path('chatId', params.chatId, {});
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

tradesDisableSupplierMessages.PATH = '/market/api/v1/trades/chat/{chatId}/disable-supplier-messages';

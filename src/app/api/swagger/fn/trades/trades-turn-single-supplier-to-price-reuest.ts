/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TradesTurnSingleSupplierToPriceReuest$Params {
  tradeId: number;
}

export function tradesTurnSingleSupplierToPriceReuest(http: HttpClient, rootUrl: string, params: TradesTurnSingleSupplierToPriceReuest$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradesTurnSingleSupplierToPriceReuest.PATH, 'post');
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

tradesTurnSingleSupplierToPriceReuest.PATH = '/bla-bla-vla/trades/{tradeId}/to-price-request';

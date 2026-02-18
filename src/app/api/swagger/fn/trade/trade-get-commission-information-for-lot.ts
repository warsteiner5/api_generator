/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TradeGetCommissionInformationForLot$Params {
  lotId: number;
}

export function tradeGetCommissionInformationForLot(http: HttpClient, rootUrl: string, params: TradeGetCommissionInformationForLot$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, tradeGetCommissionInformationForLot.PATH, 'get');
  if (params) {
    rb.path('lotId', params.lotId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
    })
  );
}

tradeGetCommissionInformationForLot.PATH = '/bla-bla-vla/Trade/GetCommissionInformationForLot/{lotId}';

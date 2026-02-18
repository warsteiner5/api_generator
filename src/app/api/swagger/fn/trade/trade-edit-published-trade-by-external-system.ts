/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiTradeDto } from '../../models/api-trade-dto';

export interface TradeEditPublishedTradeByExternalSystem$Params {
      body?: ApiTradeDto | null
}

export function tradeEditPublishedTradeByExternalSystem(http: HttpClient, rootUrl: string, params?: TradeEditPublishedTradeByExternalSystem$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, tradeEditPublishedTradeByExternalSystem.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

tradeEditPublishedTradeByExternalSystem.PATH = '/bla-bla-vla/Trade/EditPublishedTradeByExternalSystem';

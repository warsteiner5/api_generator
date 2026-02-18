/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto } from '../../models/api-market-json-result-of-customer-comission-protocol-with-docs-dto';

export interface TradesGetConsiderationProtocol$Params {
  id: number;
}

export function tradesGetConsiderationProtocol(http: HttpClient, rootUrl: string, params: TradesGetConsiderationProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetConsiderationProtocol.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto>;
    })
  );
}

tradesGetConsiderationProtocol.PATH = '/bla-bla-vla/trades/{id}/customer-comission-protocol';

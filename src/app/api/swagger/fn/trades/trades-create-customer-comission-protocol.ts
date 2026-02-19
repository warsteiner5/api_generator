/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateCustomerComissionProtocolDto } from '../../models/api-create-customer-comission-protocol-dto';

export interface TradesCreateCustomerComissionProtocol$Params {
  id: number;
      body?: ApiCreateCustomerComissionProtocolDto | null
}

export function tradesCreateCustomerComissionProtocol(http: HttpClient, rootUrl: string, params: TradesCreateCustomerComissionProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradesCreateCustomerComissionProtocol.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

tradesCreateCustomerComissionProtocol.PATH = '/market/api/v1/trades/{id}/customer-comission-protocol/create';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiPublishCustomerComissionProtocolDto } from '../../models/api-publish-customer-comission-protocol-dto';

export interface TradesPublishConsiderationProtocol$Params {
  id: number;
      body?: ApiPublishCustomerComissionProtocolDto | null
}

export function tradesPublishConsiderationProtocol(http: HttpClient, rootUrl: string, params: TradesPublishConsiderationProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradesPublishConsiderationProtocol.PATH, 'post');
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

tradesPublishConsiderationProtocol.PATH = '/bla-bla-vla/trades/{id}/customer-comission-protocol/publish';

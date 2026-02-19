/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiPublishCustomerComissionProtocolDto } from '../../models/api-publish-customer-comission-protocol-dto';

export interface TradesNoEisPublishConsiderationProtocol$Params {
  id: number;
      body?: ApiPublishCustomerComissionProtocolDto | null
}

export function tradesNoEisPublishConsiderationProtocol(http: HttpClient, rootUrl: string, params: TradesNoEisPublishConsiderationProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradesNoEisPublishConsiderationProtocol.PATH, 'post');
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

tradesNoEisPublishConsiderationProtocol.PATH = '/market/api/v1/trades/{id}/customer-comission-protocol/no-eis-publish';

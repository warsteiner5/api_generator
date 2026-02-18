/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApproveOrderModelAltDto } from '../../models/api-approve-order-model';

export interface OrderApproveOrderByParticipant$Params {
      body?: ApiApproveOrderModelAltDto | null
}

export function orderApproveOrderByParticipant(http: HttpClient, rootUrl: string, params?: OrderApproveOrderByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, orderApproveOrderByParticipant.PATH, 'post');
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

orderApproveOrderByParticipant.PATH = '/bla-bla-vla/order/ApproveByParticipant';

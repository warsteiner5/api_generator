/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiSetDealIdForOrdersLinkModelAltDto } from '../../models/api-set-deal-id-for-orders-link-model';

export interface DealSetDealIdForOrdersLink$Params {
      body?: ApiSetDealIdForOrdersLinkModelAltDto | null
}

export function dealSetDealIdForOrdersLink(http: HttpClient, rootUrl: string, params?: DealSetDealIdForOrdersLink$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, dealSetDealIdForOrdersLink.PATH, 'post');
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

dealSetDealIdForOrdersLink.PATH = '/api/Deal/SetDealIdForOrdersLink';

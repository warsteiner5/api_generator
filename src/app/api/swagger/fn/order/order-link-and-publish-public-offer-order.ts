/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiLinkAndPublishPublicOfferOrderModelAltDto } from '../../models/api-link-and-publish-public-offer-order-model';

export interface OrderLinkAndPublishPublicOfferOrder$Params {
      body?: ApiLinkAndPublishPublicOfferOrderModelAltDto | null
}

export function orderLinkAndPublishPublicOfferOrder(http: HttpClient, rootUrl: string, params?: OrderLinkAndPublishPublicOfferOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, orderLinkAndPublishPublicOfferOrder.PATH, 'post');
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

orderLinkAndPublishPublicOfferOrder.PATH = '/api/order/LinkAndPublishPublicOfferOrder';

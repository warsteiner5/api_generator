/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCustomerCommercialOfferRequestAltDto } from '../../models/api-customer-commercial-offer-request';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface OffersSendCustomerCommercialOffer$Params {
  id: number;
      body?: ApiCustomerCommercialOfferRequestAltDto | null
}

export function offersSendCustomerCommercialOffer(http: HttpClient, rootUrl: string, params: OffersSendCustomerCommercialOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, offersSendCustomerCommercialOffer.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

offersSendCustomerCommercialOffer.PATH = '/market/api/v1/offers/{id}/commercial-offer';

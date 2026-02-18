/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCustomerCommercialOfferRequestAltDto } from '../../models/api-customer-commercial-offer-request';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface OrganizationsSendCustomerCommercialOffer$Params {
  guid: string;
      body?: ApiCustomerCommercialOfferRequestAltDto | null
}

export function organizationsSendCustomerCommercialOffer(http: HttpClient, rootUrl: string, params: OrganizationsSendCustomerCommercialOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsSendCustomerCommercialOffer.PATH, 'post');
  if (params) {
    rb.path('guid', params.guid, {});
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

organizationsSendCustomerCommercialOffer.PATH = '/bla-bla-vla/organizations/{guid}/commercial-offer';

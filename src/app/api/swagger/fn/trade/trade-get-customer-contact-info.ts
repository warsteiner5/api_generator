/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCustomerContactInfoAltDto } from '../../models/api-customer-contact-info';

export interface TradeGetCustomerContactInfo$Params {
}

export function tradeGetCustomerContactInfo(http: HttpClient, rootUrl: string, params?: TradeGetCustomerContactInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiCustomerContactInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradeGetCustomerContactInfo.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiCustomerContactInfoAltDto>;
    })
  );
}

tradeGetCustomerContactInfo.PATH = '/bla-bla-vla/Trade/GetCustomerContactInfo';

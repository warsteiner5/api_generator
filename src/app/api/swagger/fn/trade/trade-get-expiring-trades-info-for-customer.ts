/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExpiringTradesInfoForCustomerAltDto } from '../../models/api-expiring-trades-info-for-customer';
import { ApiTradesFilterObjectForCustomerAltDto } from '../../models/api-trades-filter-object-for-customer';

export interface TradeGetExpiringTradesInfoForCustomer$Params {
      body?: ApiTradesFilterObjectForCustomerAltDto | null
}

export function tradeGetExpiringTradesInfoForCustomer(http: HttpClient, rootUrl: string, params?: TradeGetExpiringTradesInfoForCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExpiringTradesInfoForCustomerAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradeGetExpiringTradesInfoForCustomer.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiExpiringTradesInfoForCustomerAltDto>;
    })
  );
}

tradeGetExpiringTradesInfoForCustomer.PATH = '/api/Trade/GetExpiringTradesInfoForCustomer';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiChangeContractByCustomerRequestAltDto } from '../../models/api-change-contract-by-customer-request';
import { ApiMarketJsonResultOfInteger } from '../../models/api-market-json-result-of-integer';

export interface DealsChangeContractByCustomer$Params {
  id: number;
      body?: ApiChangeContractByCustomerRequestAltDto | null
}

export function dealsChangeContractByCustomer(http: HttpClient, rootUrl: string, params: DealsChangeContractByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
  const rb = new RequestBuilder(rootUrl, dealsChangeContractByCustomer.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfInteger>;
    })
  );
}

dealsChangeContractByCustomer.PATH = '/bla-bla-vla/deals/{id}/customer/change';

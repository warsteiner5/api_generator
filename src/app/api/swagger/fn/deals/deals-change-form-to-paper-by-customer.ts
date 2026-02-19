/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiChangeFormToPaperByCustomerRequestAltDto } from '../../models/api-change-form-to-paper-by-customer-request';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface DealsChangeFormToPaperByCustomer$Params {
  id: number;
      body?: ApiChangeFormToPaperByCustomerRequestAltDto | null
}

export function dealsChangeFormToPaperByCustomer(http: HttpClient, rootUrl: string, params: DealsChangeFormToPaperByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsChangeFormToPaperByCustomer.PATH, 'post');
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

dealsChangeFormToPaperByCustomer.PATH = '/market/api/v1/deals/{id}/customer/form/change/paper';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiBatchProcessingResultAltDto } from '../../models/api-batch-processing-result';
import { ApiCreateApplicationsByCustomerBindingModelAltDto } from '../../models/api-create-applications-by-customer-binding-model';

export interface TradeCreateApplicationsByCustomer$Params {
  id: number;
      body?: ApiCreateApplicationsByCustomerBindingModelAltDto | null
}

export function tradeCreateApplicationsByCustomer(http: HttpClient, rootUrl: string, params: TradeCreateApplicationsByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiBatchProcessingResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradeCreateApplicationsByCustomer.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiBatchProcessingResultAltDto>;
    })
  );
}

tradeCreateApplicationsByCustomer.PATH = '/api/Trade/{id}/CreateApplicationsByCustomer';

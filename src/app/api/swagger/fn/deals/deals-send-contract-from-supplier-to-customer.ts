/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIntegerAltDto } from '../../models/api-market-json-result-of-integer';
import { ApiSendContractFromSupplierToCustomerRequestAltDto } from '../../models/api-send-contract-from-supplier-to-customer-request';

export interface DealsSendContractFromSupplierToCustomer$Params {
  id: number;
      body?: ApiSendContractFromSupplierToCustomerRequestAltDto | null
}

export function dealsSendContractFromSupplierToCustomer(http: HttpClient, rootUrl: string, params: DealsSendContractFromSupplierToCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsSendContractFromSupplierToCustomer.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>;
    })
  );
}

dealsSendContractFromSupplierToCustomer.PATH = '/market/api/v1/deals/{id}/participant/send';

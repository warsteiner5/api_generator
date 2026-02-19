/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIntegerAltDto } from '../../models/api-market-json-result-of-integer';
import { ApiSendContractFromCustomerToSupplierRequestAltDto } from '../../models/api-send-contract-from-customer-to-supplier-request';

export interface DealsSendContractFromCustomerToSupplier$Params {
  id: number;
      body?: ApiSendContractFromCustomerToSupplierRequestAltDto | null
}

export function dealsSendContractFromCustomerToSupplier(http: HttpClient, rootUrl: string, params: DealsSendContractFromCustomerToSupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsSendContractFromCustomerToSupplier.PATH, 'post');
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

dealsSendContractFromCustomerToSupplier.PATH = '/market/api/v1/deals/{id}/customer/send';

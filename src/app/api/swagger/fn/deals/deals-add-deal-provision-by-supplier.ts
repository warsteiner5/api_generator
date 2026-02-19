/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';
import { ApiSupplierAddDealProvisionRequestAltDto } from '../../models/api-supplier-add-deal-provision-request';

export interface DealsAddDealProvisionBySupplier$Params {
  id: number;
      body?: ApiSupplierAddDealProvisionRequestAltDto | null
}

export function dealsAddDealProvisionBySupplier(http: HttpClient, rootUrl: string, params: DealsAddDealProvisionBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsAddDealProvisionBySupplier.PATH, 'post');
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

dealsAddDealProvisionBySupplier.PATH = '/market/api/v1/deals/{id}/participant/provision';

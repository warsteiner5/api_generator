/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDecimal } from '../../models/api-market-json-result-of-decimal';

export interface AccountsGetLotCommissionInternal$Params {
  lotId: number;
  supplierOrganizationId: number;
  quotation: number | null;
}

export function accountsGetLotCommissionInternal(http: HttpClient, rootUrl: string, params: AccountsGetLotCommissionInternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimal>> {
  const rb = new RequestBuilder(rootUrl, accountsGetLotCommissionInternal.PATH, 'get');
  if (params) {
    rb.path('lotId', params.lotId, {});
    rb.path('supplierOrganizationId', params.supplierOrganizationId, {});
    rb.path('quotation', params.quotation, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDecimal>;
    })
  );
}

accountsGetLotCommissionInternal.PATH = '/bla-bla-vla/accounts/lotcommission/{lotId}/organization/{supplierOrganizationId}/quotation/{quotation}';

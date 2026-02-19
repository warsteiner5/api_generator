/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDecimalAltDto } from '../../models/api-market-json-result-of-decimal';

export interface AccountsGetLotCommissionByQuotation$Params {
  lotId: number;
  quotation: number;
}

export function accountsGetLotCommissionByQuotation(http: HttpClient, rootUrl: string, params: AccountsGetLotCommissionByQuotation$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimalAltDto>> {
  const rb = new RequestBuilder(rootUrl, accountsGetLotCommissionByQuotation.PATH, 'get');
  if (params) {
    rb.path('lotId', params.lotId, {});
    rb.path('quotation', params.quotation, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDecimalAltDto>;
    })
  );
}

accountsGetLotCommissionByQuotation.PATH = '/market/api/v1/accounts/lotcommission/{lotId}/quotation/{quotation}';

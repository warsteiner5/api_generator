/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDecimal } from '../../models/api-market-json-result-of-decimal';

export interface AccountsGetCommissionByQuotation$Params {
  tradeId: number;
  quotation: number;
}

export function accountsGetCommissionByQuotation(http: HttpClient, rootUrl: string, params: AccountsGetCommissionByQuotation$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimal>> {
  const rb = new RequestBuilder(rootUrl, accountsGetCommissionByQuotation.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
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

accountsGetCommissionByQuotation.PATH = '/bla-bla-vla/accounts/commission/{tradeId}/quotation/{quotation}';

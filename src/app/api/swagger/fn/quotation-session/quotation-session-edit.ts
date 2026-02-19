/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfQuotationSessionAltDto } from '../../models/api-market-json-result-of-quotation-session';

export interface QuotationSessionEdit$Params {
  id: number;
}

export function quotationSessionEdit(http: HttpClient, rootUrl: string, params: QuotationSessionEdit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionAltDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionEdit.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionAltDto>;
    })
  );
}

quotationSessionEdit.PATH = '/market/api/v1/quotation-session/edit/{id}';

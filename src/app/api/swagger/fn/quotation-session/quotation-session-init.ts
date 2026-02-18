/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfQuotationSession } from '../../models/api-market-json-result-of-quotation-session';

export interface QuotationSessionInit$Params {
}

export function quotationSessionInit(http: HttpClient, rootUrl: string, params?: QuotationSessionInit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSession>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionInit.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfQuotationSession>;
    })
  );
}

quotationSessionInit.PATH = '/bla-bla-vla/quotation-session/init';

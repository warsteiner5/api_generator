/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfQuotationSessionAltDto } from '../../models/api-market-json-result-of-quotation-session';

export interface QuotationSessionNewInit$Params {
}

export function quotationSessionNewInit(http: HttpClient, rootUrl: string, params?: QuotationSessionNewInit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionAltDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionNewInit.PATH, 'get');
  if (params) {
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

quotationSessionNewInit.PATH = '/market/api/v1/quotation-session-new/init';

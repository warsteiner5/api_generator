/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfGuidAltDto } from '../../models/api-market-json-result-of-guid';
import { ApiQuotationSessionAltDto } from '../../models/api-quotation-session';

export interface QuotationSessionNewSaveAsDraft$Params {
      body?: ApiQuotationSessionAltDto | null
}

export function quotationSessionNewSaveAsDraft(http: HttpClient, rootUrl: string, params?: QuotationSessionNewSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionNewSaveAsDraft.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>;
    })
  );
}

quotationSessionNewSaveAsDraft.PATH = '/market/api/v1/quotation-session-new/draft';

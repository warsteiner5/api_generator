/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPublishApplicationResultAltDto } from '../../models/api-market-json-result-of-publish-application-result';
import { ApiQuotationSessionJoinNewAltDto } from '../../models/api-quotation-session-join-new';

export interface QuotationSessionNewJoin$Params {
      body?: ApiQuotationSessionJoinNewAltDto | null
}

export function quotationSessionNewJoin(http: HttpClient, rootUrl: string, params?: QuotationSessionNewJoin$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionNewJoin.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>;
    })
  );
}

quotationSessionNewJoin.PATH = '/market/api/v1/quotation-session-new/join';

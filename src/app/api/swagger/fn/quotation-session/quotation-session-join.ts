/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPublishApplicationResultAltDto } from '../../models/api-market-json-result-of-publish-application-result';
import { ApiQuotationSessionJoinAltDto } from '../../models/api-quotation-session-join';

export interface QuotationSessionJoin$Params {
      body?: ApiQuotationSessionJoinAltDto | null
}

export function quotationSessionJoin(http: HttpClient, rootUrl: string, params?: QuotationSessionJoin$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionJoin.PATH, 'post');
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

quotationSessionJoin.PATH = '/market/api/v1/quotation-session/join';

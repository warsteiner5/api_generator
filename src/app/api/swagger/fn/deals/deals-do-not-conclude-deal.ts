/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDoNotConcludeDealRequestDto } from '../../models/api-do-not-conclude-deal-request-dto';
import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';

export interface DealsDoNotConcludeDeal$Params {
      body?: ApiDoNotConcludeDealRequestDto | null
}

export function dealsDoNotConcludeDeal(http: HttpClient, rootUrl: string, params?: DealsDoNotConcludeDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, dealsDoNotConcludeDeal.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBoolean>;
    })
  );
}

dealsDoNotConcludeDeal.PATH = '/bla-bla-vla/deals/do_not_conclude';

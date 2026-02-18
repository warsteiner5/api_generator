/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApplicationDto2 } from '../../models/api-application-dto-2';
import { ApiMarketJsonResultOfPublishApplicationResult } from '../../models/api-market-json-result-of-publish-application-result';

export interface TradesPublish$Params {
      body?: ApiApplicationDto2 | null
}

export function tradesPublish(http: HttpClient, rootUrl: string, params?: TradesPublish$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResult>> {
  const rb = new RequestBuilder(rootUrl, tradesPublish.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResult>;
    })
  );
}

tradesPublish.PATH = '/bla-bla-vla/trades/applications/publish';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOkServiceBriefReportDtoOf } from '../../models/api-market-json-result-of-ok-service-brief-report-dto-of';

export interface OkGetBriefList$Params {
      body?: Array<string> | null
}

export function okGetBriefList(http: HttpClient, rootUrl: string, params?: OkGetBriefList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOkServiceBriefReportDtoOf>> {
  const rb = new RequestBuilder(rootUrl, okGetBriefList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOkServiceBriefReportDtoOf>;
    })
  );
}

okGetBriefList.PATH = '/bla-bla-vla/okservice/brieflist';

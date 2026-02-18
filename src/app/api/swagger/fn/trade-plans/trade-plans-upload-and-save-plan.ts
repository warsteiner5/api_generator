/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfInteger } from '../../models/api-market-json-result-of-integer';

export interface TradePlansUploadAndSavePlan$Params {
  guid: string;
}

export function tradePlansUploadAndSavePlan(http: HttpClient, rootUrl: string, params: TradePlansUploadAndSavePlan$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
  const rb = new RequestBuilder(rootUrl, tradePlansUploadAndSavePlan.PATH, 'post');
  if (params) {
    rb.path('guid', params.guid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfInteger>;
    })
  );
}

tradePlansUploadAndSavePlan.PATH = '/bla-bla-vla/plans/upload/{guid}';

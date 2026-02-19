/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCalculateSumRequestAltDto } from '../../models/api-calculate-sum-request';
import { ApiMarketJsonResultOfDecimalAltDto } from '../../models/api-market-json-result-of-decimal';

export interface ItemCalculateSum$Params {
      body?: ApiCalculateSumRequestAltDto | null
}

export function itemCalculateSum(http: HttpClient, rootUrl: string, params?: ItemCalculateSum$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimalAltDto>> {
  const rb = new RequestBuilder(rootUrl, itemCalculateSum.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDecimalAltDto>;
    })
  );
}

itemCalculateSum.PATH = '/market/api/v1/item/sum';

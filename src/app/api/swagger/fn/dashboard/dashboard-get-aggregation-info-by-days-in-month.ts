/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfMarketOfferDatesResultDto } from '../../models/api-market-json-result-of-list-of-market-offer-dates-result-dto';

export interface DashboardGetAggregationInfoByDaysInMonth$Params {
  guid: string;
  month: number;
  year: number;
}

export function dashboardGetAggregationInfoByDaysInMonth(http: HttpClient, rootUrl: string, params: DashboardGetAggregationInfoByDaysInMonth$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferDatesResultDto>> {
  const rb = new RequestBuilder(rootUrl, dashboardGetAggregationInfoByDaysInMonth.PATH, 'get');
  if (params) {
    rb.path('guid', params.guid, {});
    rb.path('month', params.month, {});
    rb.path('year', params.year, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferDatesResultDto>;
    })
  );
}

dashboardGetAggregationInfoByDaysInMonth.PATH = '/bla-bla-vla/dashboard/agInfo/date/{guid}/{year}/{month}';

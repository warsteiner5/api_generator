/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfMarketOfferStatusResultDto } from '../../models/api-market-json-result-of-list-of-market-offer-status-result-dto';

export interface DashboardGetAggregationInfoByMonth$Params {
  guid: string;
  year: number;
  fromMonth: number;
  toMonth: number;
}

export function dashboardGetAggregationInfoByMonth(http: HttpClient, rootUrl: string, params: DashboardGetAggregationInfoByMonth$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto>> {
  const rb = new RequestBuilder(rootUrl, dashboardGetAggregationInfoByMonth.PATH, 'get');
  if (params) {
    rb.path('guid', params.guid, {});
    rb.path('year', params.year, {});
    rb.path('fromMonth', params.fromMonth, {});
    rb.path('toMonth', params.toMonth, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto>;
    })
  );
}

dashboardGetAggregationInfoByMonth.PATH = '/market/api/v1/dashboard/agInfo/months/{guid}/{year}/{fromMonth}/{toMonth}';

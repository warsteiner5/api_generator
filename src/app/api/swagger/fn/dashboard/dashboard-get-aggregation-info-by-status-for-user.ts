/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfMarketOfferStatusResultDto } from '../../models/api-market-json-result-of-list-of-market-offer-status-result-dto';

export interface DashboardGetAggregationInfoByStatusForUser$Params {
  guid: string;
}

export function dashboardGetAggregationInfoByStatusForUser(http: HttpClient, rootUrl: string, params: DashboardGetAggregationInfoByStatusForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOfferStatusResultDto>> {
  const rb = new RequestBuilder(rootUrl, dashboardGetAggregationInfoByStatusForUser.PATH, 'get');
  if (params) {
    rb.path('guid', params.guid, {});
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

dashboardGetAggregationInfoByStatusForUser.PATH = '/bla-bla-vla/dashboard/agInfo/user/{guid}';

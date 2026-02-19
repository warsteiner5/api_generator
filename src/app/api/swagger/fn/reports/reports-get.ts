/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto } from '../../models/api-market-json-result-of-paged-collection-of-report-registry-item-with-period-dto';
import { ApiReportSearchFilterAltDto } from '../../models/api-report-search-filter';

export interface ReportsGet$Params {
      body?: ApiReportSearchFilterAltDto | null
}

export function reportsGet(http: HttpClient, rootUrl: string, params?: ReportsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto>> {
  const rb = new RequestBuilder(rootUrl, reportsGet.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto>;
    })
  );
}

reportsGet.PATH = '/market/api/v1/reports/get';

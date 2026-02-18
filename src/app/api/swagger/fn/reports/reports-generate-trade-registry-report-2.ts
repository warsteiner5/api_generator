/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto } from '../../models/api-market-json-result-of-paged-collection-of-report-registry-item-with-period-dto';
import { ApiReportSearchFilterAltDto } from '../../models/api-report-search-filter';

export interface ReportsGenerateTradeRegistryReport2$Params {
      body?: ApiReportSearchFilterAltDto | null
}

export function reportsGenerateTradeRegistryReport2(http: HttpClient, rootUrl: string, params?: ReportsGenerateTradeRegistryReport2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto>> {
  const rb = new RequestBuilder(rootUrl, reportsGenerateTradeRegistryReport2.PATH, 'post');
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

reportsGenerateTradeRegistryReport2.PATH = '/bla-bla-vla/reports/trade-registry/search';

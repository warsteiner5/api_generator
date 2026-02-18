/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto } from '../../models/api-market-json-result-of-paged-collection-of-report-registry-item-dto';
import { ApiReportSearchFilterAltDto } from '../../models/api-report-search-filter';

export interface ReportsGenerateCustomerRegistryReport2$Params {
      body?: ApiReportSearchFilterAltDto | null
}

export function reportsGenerateCustomerRegistryReport2(http: HttpClient, rootUrl: string, params?: ReportsGenerateCustomerRegistryReport2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto>> {
  const rb = new RequestBuilder(rootUrl, reportsGenerateCustomerRegistryReport2.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto>;
    })
  );
}

reportsGenerateCustomerRegistryReport2.PATH = '/bla-bla-vla/reports/customer-registry/search';
